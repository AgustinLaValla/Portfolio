import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';
import Button from '@material-ui/core/Button';
import { contactDrawerContext } from '../../App';
import './Home.css'

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }))

const Home = () => {
    const classes = useStyles();

    const { setOpenContactDrawer } = contactDrawerContext();

    return (
        <Grid container className={classes.home__dataContainer} spacing={0}>
            <Grid item md={6} sm={12} className={classes.home__dataLeft}>
                <h1>Hi there! I'm Agustín</h1>
                <h1 style={{ color: "#7c4dff" }}>Web Developer</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe architecto soluta nihil dolore eum! Delectus ullam non inventore nihil harum, in nostrum, aperiam totam enim odio, cupiditate fugiat voluptatem nam.</p>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 20 }}
                    onClick={() => setOpenContactDrawer(true)}
                >
                    Hire me now
                </Button>
            </Grid>
            <Grid item md={6} sm={12} className={classes.home__dataRight}>
                <img src="images/example.png" alt="Agustín La Valla" className="home__myPicture"/>
            </Grid>
        </Grid>
    )
}

export default Home
