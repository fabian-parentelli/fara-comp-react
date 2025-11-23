import './accordion.css';
import { Icons } from '../../Icons/Icons';
import { useState, useRef, useEffect } from 'react';

const Accordion = ({ title, children, styles }) => {

    const mergedStyles = { ...defaultStyles, ...styles };
    const {
        backColHeader, colorHeader, backColContent, colorContent, paddingHeader, borderAcordion,
        iconBold, iconColor, iconSize, iconType, heightHeader
    } = mergedStyles;

    const contentRef = useRef(null);
    const accordionRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState('0px');

    const toggleAccordion = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (contentRef.current) {
            const scrollHeight = contentRef.current.scrollHeight;
            const extra = 30;
            setContentHeight(isOpen ? `${scrollHeight + extra}px` : '0px');
        };
    }, [isOpen, children]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accordionRef.current && !accordionRef.current.contains(event.target)) {
                setIsOpen(false);
            };
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="accordion" ref={accordionRef} style={{ border: borderAcordion }}>

            <div
                className="accordion-header" onClick={toggleAccordion}
                style={{
                    backgroundColor: backColHeader,
                    color: colorHeader,
                    padding: paddingHeader,
                    height: heightHeader
                }}
            >
                <h3>{title}</h3>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                    <Icons type={iconType} size={iconSize} bold={iconBold} color={iconColor} />
                </span>
            </div>

            <div
                className="accordion-content"
                ref={contentRef}
                style={{
                    maxHeight: contentHeight,
                    backgroundColor: backColContent,
                    color: colorContent
                }}
            >
                <div className="accordion-content-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export { Accordion };

const defaultStyles = {
    backColHeader: '#f0f0f0',
    colorHeader: '#000',
    backColContent: '#fff',
    colorContent: '#000',
    paddingHeader: '1rem',
    paddingContent: '1rem',
    borderAcordion: '1px solid black',
    iconColor: '#2c3e50',
    iconSize: '30px',
    iconBold: 2,
    iconType: 'chevron',
    heightHeader: '100%'
};