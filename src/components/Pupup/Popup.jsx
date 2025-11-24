import './popup.css';
import { Icons } from '../../Icons/Icons.jsx';
import { useState, useRef, useEffect } from 'react';

const Popup = ({ text, icon, styles, children }) => {

    const mergedStyles = { ...defaultStyles, ...styles };
    const { color, size, position, width } = mergedStyles;

    const contRef = useRef(null);
    const triggerRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!contRef.current) return;
            if (triggerRef.current && triggerRef.current.contains(event.target)) return;
            if (!contRef.current.contains(event.target)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="popup-container">

            <span
                className="popup-trigger"
                onClick={togglePopup} ref={triggerRef}
            >
                {text
                    ? <p style={{ color, fontSize: size }}>{text}</p>
                    : <Icons type={icon || 'app'} color={color} hover={true} size={size} />
                }
            </span>

            {isOpen && (
                <div
                    className={`popup-content popUp-${position}`} ref={contRef}
                    onClick={togglePopup}
                    style={{ width }}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export { Popup };

const defaultStyles = {
    color: '#f0f0f0',
    size: '30px',
    position: 'left',
    width: '300px'
};