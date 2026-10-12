import './cloudFile.css';
import { useState, useRef } from 'react';
import { Icons } from '../../Icons/Icons';

const CloudFile = ({
    onChange, folderName, contClass, id, preImg,
    single = false,
    accept = single ? 'image/*' : 'image/*,application/pdf',
    iconType = 'cloudup',
    iconSize = '28px',
    iconColor = '#ffffff',
    placeholderText = 'Subir imagen',
    placeholderIcon = 'app',
    overlayText = 'Cambiar imagen'
}) => {

    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);

    const handleImgChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (!selectedFiles.length) return;

        let newFiles;
        if (single) {
            images.forEach(image => {
                if (image.url) URL.revokeObjectURL(image.url);
                if (image.fileUrl) URL.revokeObjectURL(image.fileUrl);
            });
            newFiles = selectedFiles;
        } else {
            newFiles = [...files, ...selectedFiles];
            newFiles.sort((a, b) => a.name.localeCompare(b.name));
        }
        setFiles(newFiles);

        const filePreviews = newFiles.map(file => {
            if (file.type.startsWith("image/")) {
                return { url: URL.createObjectURL(file), type: "image" };
            } else if (file.type === "application/pdf") {
                return { url: null, type: "pdf", fileUrl: URL.createObjectURL(file) };
            };
            return null;
        }).filter(Boolean);

        setImages(filePreviews);

        const formData = new FormData();
        newFiles.forEach(file => formData.append("files", file));
        formData.append("folderName", folderName);
        if (id) formData.append("pid", id);
        onChange(formData);
    };

    const handleClick = () => fileInputRef.current.click();

    const overlay = (
        <div className='cfOverlay'>
            <Icons type={iconType} size={iconSize} color={iconColor} />
            <span className='cfOverlayText'>{overlayText}</span>
        </div>
    );

    return (
        <div className={`cloudFile ${contClass}`} onClick={handleClick}>
            <input
                type="file"
                name='files'
                accept={accept}
                className='file-inside'
                hidden
                ref={fileInputRef}
                multiple={!single}
                onChange={handleImgChange}
            />

            {single && (images[0] || preImg) ? (
                <>
                    <img
                        src={(images[0] && images[0].url) || preImg}
                        className='cfSingle'
                        alt='preview'
                    />
                    {overlay}
                </>
            ) : images.length > 0 ? (
                <>
                    <div className='image-container'>
                        {images.map((file, index) => (
                            file.type === "image" ? (
                                <img key={index} src={file.url} className={images.length === 1 ? "imgFile" : "thumbnail"} alt={`preview-${index}`} />
                            ) : (
                                <a key={index} href={file.fileUrl} target="_blank" rel="noopener noreferrer" className="pdf-icon">
                                    <Icons type='pdf' color='#b71c1c' size='50px' />
                                </a>
                            )
                        ))}
                    </div>
                    {overlay}
                </>
            ) : (
                <div className='cfPlaceholder'>
                    {preImg
                        ? <img src={preImg} alt='logo' className='cloudUploadIcon' />
                        : <Icons type={placeholderIcon} color='#2990c8' size='70px' />}
                    <span className='cfText'>{placeholderText}</span>
                </div>
            )}
        </div>
    );
};

export { CloudFile };

// cfRect - cfCircle - cfTicket -cfSmall
