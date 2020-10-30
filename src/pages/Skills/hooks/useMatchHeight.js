import { useEffect } from 'react';

export const useMatchHeight = () => {
    const onResize = () => {
        const skillsBoxHeight = document.getElementById('skillsContainer').offsetHeight;
        const iconsBox = document.getElementById('iconsContainer');
        if (iconsBox) {
            iconsBox.style.minHeight = `${skillsBoxHeight}px`;
        }

    }
    useEffect(() => {
        setTimeout(() => onResize());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
}