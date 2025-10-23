import './spinnerH.css';

const SpinnerH = ({ color = 'gray' }) => {

    return (
        <div className='spinnerH'>
            <div className="rect1" style={{ backgroundColor: color }}></div>
            <div className="rect2" style={{ backgroundColor: color }}></div>
            <div className="rect3" style={{ backgroundColor: color }}></div>
            <div className="rect4" style={{ backgroundColor: color }}></div>
            <div className="rect5" style={{ backgroundColor: color }}></div>
        </div>
    );
};

export { SpinnerH };