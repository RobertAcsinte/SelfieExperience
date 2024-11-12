import React, { useEffect } from 'react';

const CuratorFeed = () => {
    useEffect(() => {
        // Create and append the script element
        const script = document.createElement('script');
        script.async = true;
        script.charset = 'UTF-8';
        script.src = 'https://cdn.curator.io/published/e6aada58-71a7-4f4d-94e5-28242c88145a.js';
        document.body.appendChild(script);

        // Cleanup function to remove the script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div id="curator-feed-default-feed-layout">
            <a
                href="https://curator.io"
                target="_blank"
                className="crt-logo crt-tag"
                rel="noopener noreferrer"
            >
                Powered by Curator.io
            </a>
        </div>
    );
};

export default CuratorFeed;