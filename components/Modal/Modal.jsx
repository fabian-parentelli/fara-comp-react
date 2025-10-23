import './modal.css';

const Modal = ({ children, open = false, onClose, btn = true, btnName = 'Cerrar', btnBackColor = '#333',
    btnColor = '#EAEBEF' }) => {

    if (!open) return null;

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal')) onClose();
    };

    return (
        <div className='modal' onClick={handleOutsideClick}>
            <section className='modalSect' onClick={(e) => e.stopPropagation()}>
                {children}

                {btn &&
                    <button className='btnModal'
                        style={{ backgroundColor: btnBackColor, color: btnColor }} onClick={() => onClose()}
                    >
                        {btnName}
                    </button>}
            </section>
        </div>
    );
};

export { Modal };