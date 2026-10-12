import { useId } from 'react';

const YoutubeMusicIcon = () => {
    const maskId = useId();

    return (
        <>
            <mask id={maskId} maskUnits="userSpaceOnUse">
                <rect x="0" y="0" width="24" height="24" fill="white" />
                <circle cx="12" cy="12" r="7.5" fill="black" />
                <path d="M10 8.5l6 3.5l-6 3.5z" fill="black" />
            </mask>
            <circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" mask={`url(#${maskId})`} />
        </>
    );
};

export default YoutubeMusicIcon;
