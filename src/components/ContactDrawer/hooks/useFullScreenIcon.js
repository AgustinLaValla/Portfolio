import React, { useState, useEffect } from 'react';

export const useFullScreenIcon = () => {
    const [showFullScreenIcons, setShowFullScreenIcons] = useState(true);

    const showFullScreenIcon = () => {
        if (window.innerWidth < 960) {
            setShowFullScreenIcons(false);
        } else {
            setShowFullScreenIcons(true);
        }
    }

    useEffect(() => {
        showFullScreenIcon();
        return () => { }
    }, []);

    window.addEventListener('resize', showFullScreenIcon);

    return showFullScreenIcons;
}

