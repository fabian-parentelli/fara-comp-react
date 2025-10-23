import './tooltip.css';
import { useState } from 'react';

export const Tooltip = ({
    text = 'tooltip', children, position = 'top', backgroundColor = '#333', color = '#D9D9D9',
    cursor = 'default' }) => {

    const [vew, setVew] = useState(false);

    return (
        <div
            className='tooltip'
            onMouseEnter={() => setVew(true)}
            onMouseLeave={() => setVew(false)}
            style={{ cursor }}
        >
            {children}
            {vew && position !== 'none' &&
                <p
                    className={`tooltipText ${position} ${vew ? 'visible' : ''}`}
                    style={{ backgroundColor, color }}
                >
                    {text}
                </p>
            }
        </div>
    );
};