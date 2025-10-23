import { useLayoutEffect, useRef } from "react";

const ScrollToTop = ({ children }) => {
    const prevPathRef = useRef(window.location.pathname);

    useLayoutEffect(() => {
        const handleUrlChange = () => {
            if (prevPathRef.current !== window.location.pathname) {
                document.documentElement.scrollTop = 0;
                prevPathRef.current = window.location.pathname;
            }
        };

        const originalPushState = history.pushState;
        history.pushState = function (...args) {
            originalPushState.apply(this, args);
            handleUrlChange();
        };

        const originalReplaceState = history.replaceState;
        history.replaceState = function (...args) {
            originalReplaceState.apply(this, args);
            handleUrlChange();
        };

        window.addEventListener("popstate", handleUrlChange);

        return () => {
            window.removeEventListener("popstate", handleUrlChange);
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
        };
    }, []);

    return children;
};

export { ScrollToTop };