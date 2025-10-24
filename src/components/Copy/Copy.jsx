import './copy.css';
import { useState } from "react";
import { Icons } from '../../Icons/Icons';
import { lightenColor } from '../../utils/lightColor.utils.js';

const Copy = ({ text, size = 12, color = 'black', duration = 2000 }) => {

    const [col, setCol] = useState(color);
    const [isCopy, setIsCopy] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopy(true);
            setTimeout(() => setIsCopy(false), duration);
        } catch { setIsCopy(false); }
    };

    return (
        <div
            className="copy"
            onClick={handleCopy}
            onMouseEnter={() => setCol(lightenColor(color))}
            onMouseLeave={() => setCol(color)}
        >
            <p style={{ fontSize: size, color: col }}>{text}</p>
            <Icons type={!isCopy ? 'copy' : 'check'} size={size} color={col} />
        </div>
    );
};

export { Copy };