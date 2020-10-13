import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { linkedinSvg } from './iconsData';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../../mui-styles/muiStyles';
import '../About.css'

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const LinkedingIcon = () => {
    const classes = useStyles();
    return (
        <SvgIcon version="1.1" width="25px" height="20px" viewBox="0 0 438.536 438.535" className={classes.about__svgIcon}>
            <rect x="5.424" y="145.895" width="94.216" height="282.932" />
            <path d={linkedinSvg.d1} />
            <path d={linkedinSvg.d2} />
        </SvgIcon>
    )
}


export default LinkedingIcon;