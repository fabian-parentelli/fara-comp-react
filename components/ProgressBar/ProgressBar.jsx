import './progressBar.css';
import { useState, useEffect } from "react";

const ProgressBar = ({ progress }) => {

    const [loading, setLoading] = useState(0);

    useEffect(() => {
        let interval;

        if (progress.open) {
            setLoading(0);
            interval = setInterval(() => {
                setLoading(prev => {
                    if (prev >= 95) return prev;
                    return prev + Math.random() * 10;
                });
            }, 200);
        } else if (!progress.open && loading > 0) {
            setLoading(100);
            const timeout = setTimeout(() => setLoading(0), 500);
            return () => clearTimeout(timeout);
        }

        return () => clearInterval(interval);
    }, [progress.open]);

    if (!progress.open && loading === 0) return null;

    return (
        <div className="progressBar">
            <div className="progress-container">
                <div
                    className="progress-fill"
                    style={{ width: `${loading}%`, background: progress.background || '#333' }}
                >
                    <span className="progress-text">{Math.round(loading)}%</span>
                </div>
            </div>
        </div>
    );
};

export { ProgressBar };