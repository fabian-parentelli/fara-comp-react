import './progressBar.css';
import { useState, useEffect } from "react";

const ProgressBar = ({ open, background }) => {

    const [loading, setLoading] = useState(0);

    useEffect(() => {
        let interval;

        if (open) {
            setLoading(0);
            interval = setInterval(() => {
                setLoading(prev => {
                    if (prev >= 95) return prev;
                    return prev + Math.random() * 10;
                });
            }, 200);
        } else if (!open && loading > 0) {
            setLoading(100);
            const timeout = setTimeout(() => setLoading(0), 500);
            return () => clearTimeout(timeout);
        }

        return () => clearInterval(interval);
    }, [open]);

    if (!open && loading === 0) return null;

    return (
        <div className="progressBar">
            <div className="progress-container">
                <div
                    className="progress-fill"
                    style={{ width: `${loading}%`, background: background || '#333' }}
                >
                    <p className="progress-text">{Math.round(loading)}%</p>
                </div>
            </div>
        </div>
    );
};

export { ProgressBar };