import './badge.css';
import { Icons } from '../../Icons/Icons';
import { lightenColor } from '../../utils/lightColor.utils.js';

const Badge = ({ type = 'app', name, backgroundColor = '#333', size = 30 }) => {

    const color = lightenColor(backgroundColor);

    return (
        <div className='badge' >
            <p
                className='badgeP'
                style={{ backgroundColor: color }}
            >
                {name || '0'}
            </p>

            <Icons type={type} size={`${size}px`} color={backgroundColor} />
        </div>
    );
};

export { Badge };