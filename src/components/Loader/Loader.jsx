import './loader.css';
import { Spinner } from '../Spinner/Spinner';

const Loader = ({ loading, color = 'gray', text }) => {

    if (loading) return (
        <div className='loader'>
            <Spinner size={'50px'} color={color} />
            {text && <p>{text}</p>}
        </div>
    );
};

export { Loader };