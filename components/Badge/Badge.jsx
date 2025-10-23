import './badge.css';
import { Icons } from '../../Icons/Icons';

const Badge = ({ type = 'app', name, backgroundColor = '#333', size = 30 }) => {

    return (
        <div className='badge' >
            <p
                className='badgeP'
                style={{ backgroundColor: backgroundColor }}
            >
                {name || '0'}
            </p>

            <Icons type={type} size={`${size}px`} color='#333' />
        </div>
    );
};

export { Badge };