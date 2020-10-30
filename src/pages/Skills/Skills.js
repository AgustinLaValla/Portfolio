import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as SkillsIcon } from './icons/capability.svg';
import { ReactComponent as Cpu } from './icons/cpu.svg';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';
import SkillsValues from './SkillsValues';
import TechIcons from './TechIcons';
import { useMatchHeight } from './hooks/useMatchHeight';
import './Skills.css';


const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));


const Skills = () => {
    const classes = useStyles();
    useMatchHeight();
    
    return (
        <Grid container className={`${classes.skillsContainer} animated fadeIn`} spacing={3} alignItems="center">
            <Grid item md={6} xs={12}>
                <h3 className="skills__title">My Skills</h3>
                <Paper elevation={3} className={classes.paper} id="skillsContainer">
                    <Fab color="primary" className={classes.skils__fabIcon}>
                        <SvgIcon fontSize="large">
                            <SkillsIcon className="skills__svgIcon" />
                        </SvgIcon>
                    </Fab>
                    <SkillsValues />
                </Paper>
            </Grid>

            <Grid item md={6} xs={12}>
                <h3 className="skills__title">Technologies that I use</h3>
                <Paper elevation={3} className={`${classes.paper} ${classes.skills__techIconsContainer}`} id="iconsContainer">
                    <Fab color="primary" className={classes.skils__fabIcon}>
                        <SvgIcon fontSize="large">
                            <Cpu className="skills__svgIcon" />
                        </SvgIcon>
                    </Fab>
                    <TechIcons />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Skills;
