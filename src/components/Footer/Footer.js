import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.css';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';
import { GitSvg, LinkedinSvg } from './Icons';

const useStyles = makeStyles(theme => ({...setStyles(theme)}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid container className="footer__container" spacing={0}>
            <Grid item md={4} xs={12} display={{ sm: 'none', md: 'block' }}></Grid>
            <Grid item md={4} xs={12} className={classes.footer__contactContainer}>
                <h3 className="footer__contactTitle">Contact</h3>
                <h5>Cel: (0223) 15 5432859</h5>
                <h4>Email: agulavalla@gmail.com</h4>
            </Grid>
            <Grid item md={4} xs={12} className={classes.footer__conenectContainer}>
                <h3 className="footer__connectTitle">Socials</h3>
                <div className="footer__iconsContainer">
                    <GitSvg />
                    <LinkedinSvg />
                </div>
            </Grid>
            
        </Grid >
    )
}

export default Footer;
