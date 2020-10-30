import React from 'react';
import Fab from '@material-ui/core/Fab';
import GitIcon from './icons/GitIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';
import './About.css';

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const UserData = ({display, flexed}) => {
    const classes = useStyles();
    return (
        <Box display={display} className={flexed ? classes.about__userDataXs : null}>
            <h1 className="about__name">Agustín La Valla</h1>
            <h3 className="about__profession">Web Developer</h3>
            <div className="about__iconBox">
                <a href="https://github.com/AgustinLaValla" target="_blank" rel="noopener noreferrer">
                    <Tooltip title="Github" classes={{ tooltip: classes.tooltip }}>
                        <Fab className={classes.about__fabIcon} size="medium" color="primary">
                            <GitIcon />
                        </Fab>
                    </Tooltip>
                </a>
                <a href="https://www.linkedin.com/in/agust%C3%ADn-la-valla-7199361b9" target="_blank" rel="noopener noreferrer">
                    <Tooltip title="Linkedin" classes={{ tooltip: classes.tooltip }}>
                        <Fab className={classes.about__fabIcon} size="medium" color="primary">
                            <LinkedinIcon />
                        </Fab>
                    </Tooltip>
                </a>
            </div>
        </Box>
    )
}

export default UserData
