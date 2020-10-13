import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import { setStyles } from '../../mui-styles/muiStyles';
import { contactDrawerContext } from '../../App';
import './About.css';
import UserData from './UserData';


const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const About = () => {
    const classes = useStyles();
    const { setOpenContactDrawer } = contactDrawerContext();
    const data = [
        {
            title: 'Email:',
            data: 'agulavalla@gmail.com',
            icon: <MailOutlineIcon />
        },
        {
            title: 'Phone:',
            data: '2235432859',
            icon: <PhoneIcon />
        }
    ];

    return (
        <Box className={`${classes.about} animated fadeIn`}>
            <Paper className={classes.about__paper}>
                <Grid container spacing={3}>
                    <Grid item md={4}>

                        <UserData display={{ xs:'flex', md: 'none' }} flexed={true}/>

                        <img style={{ width: '100%' }} src="images/about_image.jpg" alt="Agustín La Valla" />
                        {
                            data.map((item, index) => (
                                <Fragment key={index}>
                                    <Grid container direction="row" alignItems="center" justify="flex-start">
                                        <Grid item xs={5} style={{ padding: '15px 0px' }}>
                                            <Chip label={item.title} color="primary" icon={item.icon} />
                                        </Grid>
                                        <Grid item xs={7} style={{ padding: '15px 0px' }}>
                                            <span>{item.data}</span>
                                        </Grid>
                                    </Grid>
                                    {index < data.length - 1 && <hr className="about__divider" />}
                                </Fragment>
                            ))
                        }

                    </Grid>
                    <Grid item md={8}>
                        <UserData display={{ xs: 'none', md: 'block' }} />
                        <p className="about__description">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempore et vel voluptas quidem molestiae? Rem quod officia dolor quae esse iure aliquid laboriosam autem, iste unde quia amet ducimus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempore et vel voluptas quidem molestiae? Rem quod officia dolor quae esse iure aliquid laboriosam autem, iste unde quia amet ducimus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempore et vel voluptas quidem molestiae? Rem quod officia dolor quae esse iure aliquid laboriosam autem, iste unde quia amet ducimus.
                        </p>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 20 }}
                            onClick={() => setOpenContactDrawer(true)}
                        >
                            Contact Me!
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default About
