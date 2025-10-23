import './copy.css';
import { useState } from "react";
import { Icons } from '../../Icons/Icons';

const Copy = ({ text, size = 12, color = 'black', duration = 2000 }) => {

    const [isCopy, setIsCopy] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopy(true);
            setTimeout(() => setIsCopy(false), duration);
        } catch { setIsCopy(false); }
    };

    return (
        <div className="copy" onClick={handleCopy}>
            <p style={{ fontSize: size, color }}>{text}</p>
            <Icons type={!isCopy ? 'copy' : 'check'} size={size} color={color} />
        </div>
    );
};

export { Copy };