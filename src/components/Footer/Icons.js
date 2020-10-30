import React from 'react';
import { gitSvg, linkedinSvg } from './iconsData';

export const GitSvg = () => {
    return (
        <a href="https://github.com/AgustinLaValla" target="_blank" rel="noopener noreferrer" className="footer__svgContainer">
            <svg enableBackground="new 0 0 30 30" height="30px" className="svgIcon" id="Github" version="1.1" viewBox="0 0 30 30" width="30px">
                <path clipRule="evenodd" d={gitSvg.d} fillRule="evenodd" id="Cat" />
            </svg>
        </a>
    );
}


export const LinkedinSvg = () => {
    return (

        <a href="https://www.linkedin.com/in/agust%C3%ADn-la-valla-7199361b9/" className="footer__svgContainer" target="_blank" rel="noopener noreferrer" >
            <svg version="1.1"  width="25px" height="20px" viewBox="0 0 438.536 438.535" fill="#333" className="svgIcon">
                <rect x="5.424" y="145.895" width="94.216" height="282.932" />
                <path d={linkedinSvg.d1} />
                <path d={linkedinSvg.d2} />
            </svg>
        </a>
    );
}
