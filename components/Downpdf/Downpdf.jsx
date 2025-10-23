import './downpdf.css';
import { Icons } from "../../Icons/Icons";
import { Tooltip } from "../Tooltips/Tooltips";

const Downpdf = ({ url, position = 'top' }) => {

    const handleDownload = async () => {

        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "ticket.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
    };

    return (
        <Tooltip text="Descargar pdf" position={position}>
            <div className="downpdf" onClick={handleDownload}>
                <Icons type='pdf' color='#B71C1C' />
            </div>
        </Tooltip>
    );
};

export { Downpdf };