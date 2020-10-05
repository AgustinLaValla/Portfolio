import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Slider from '@material-ui/core/Slider';


const CustomSlider = withStyles({
    root: {
        color: "#7c4dff",
        height: 8
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#7c4dff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
        
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export default CustomSlider;
