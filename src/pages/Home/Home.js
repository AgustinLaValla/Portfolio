import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';
import Button from '@material-ui/core/Button';
import { contactDrawerContext } from '../../App';
import './Home.css'

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const Home = () => {
    const classes = useStyles();

    const { setOpenContactDrawer } = contactDrawerContext();

    return (
        <Grid container className={`${classes.home__dataContainer} animated fadeIn`} spacing={0}>
            <Grid item md={6} sm={12} className={classes.home__dataLeft}>
                <h1>Hi there! I'm Agustín</h1>
                <h1 style={{ color: "#7c4dff" }}>Web Developer</h1>
                <p> I'm a Web Developer passionate about frontend and backend technologies. I enjoy building everything and learning new technologies.The constancy, responsibility and commitment is everything for me. If you are interested in hiring me or asking me for a collaboration, you can get in touch with me here.</p>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 35 }}
                    onClick={() => setOpenContactDrawer(true)}
                >
                    Hire me now
                </Button>
            </Grid>
            <Grid item md={6} sm={12} className={classes.home__dataRight}>
                <img src="images/enhanced.png" alt="Agustín La Valla" className="home__myPicture" />
            </Grid>
        </Grid>
    )
}

export default Home;
