import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { gitSvg } from './iconsData';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../../mui-styles/muiStyles';
import '../About.css'

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const GitIcon = () => {
    const classes = useStyles();
    return (
        <SvgIcon enableBackground="new 0 0 30 30" height="30px" className={classes.about__svgIcon} id="Github" version="1.1" viewBox="0 0 30 30" width="30px">
            <path clipRule="evenodd" d={gitSvg.d} fillRule="evenodd" id="Cat" />
        </SvgIcon>
    )
}

export default GitIcon

