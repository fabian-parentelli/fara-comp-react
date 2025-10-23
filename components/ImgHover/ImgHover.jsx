import './imgHover.css';

const ImgHover = ({ img, border, objectFit = 'cover', pointer = false }) => {

    return (
        <>
            {img &&
                <div className='imgHover'>
                    <img
                        src={img} alt="img" style={{
                            borderRadius: border === false ? "0" : "50%",
                            objectFit,
                            cursor: pointer ? 'pointer' : ''
                        }}
                    />
                    <div className='imgHover-cont'>
                        <img
                            src={img} alt="img" style={{
                                borderRadius: border === false ? "0" : "50%",
                                objectFit
                            }}
                        />
                    </div>
                </div>
            }
        </>
    );
};

export { ImgHover };