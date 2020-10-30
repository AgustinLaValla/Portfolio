import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';
import { useFormikForm } from './hooks/useFormmikForm';
import './ContactDrawer.css';

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const FormContact = ({dispatch}) => {
    const classes = useStyles();

    const { formik, loading } = useFormikForm({dispatch});

    return (

        <ListItem className={classes.listContact}>

            <h4>HAVE A QUESTION OR WANT TO WORK TOGETHER?</h4>

            <form className="sidebar__contactForm" onSubmit={formik.handleSubmit}>
                <Grid container className={classes.formGroupGridContainer} spacing={0}>
                    <Grid item xs={3}>
                        <label htmlFor="name">Name</label>
                    </Grid>

                    <Grid item xs={9}>
                        <TextField
                            type="text"
                            name="name"
                            id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.name}
                            error={formik.errors.name && formik.touched.name}
                        />
                    </Grid>
                </Grid>

                <Grid container className={classes.formGroupGridContainer} spacing={0}>
                    <Grid item xs={3}>
                        <label htmlFor="email">Email</label>
                    </Grid>

                    <Grid item xs={9}>
                        <TextField
                            type="email"
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.email}
                            error={formik.errors.email && formik.touched.email}
                        />
                    </Grid>
                </Grid>

                <Grid container className={classes.formGroupGridContainer} spacing={0}>
                    <Grid item xs={3}>
                        <label htmlFor="message">Message</label>
                    </Grid>

                    <Grid item xs={9}>
                        <TextField
                            type="text"
                            name="message"
                            id="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.message}
                            error={formik.errors.message && formik.touched.message}
                        />
                    </Grid>
                </Grid>


                <Grid container className={classes.formGroupGridContainer} spacing={0}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.contactFormBtn}
                            type="submit"
                        >
                            {
                                loading ?
                                    <Fragment>
                                        <CircularProgress color="secondary" color="#fff" style={{ marginRight: 15 }} />
                                        ...LOADING
                                    </Fragment>
                                    :
                                    'SEND MESSAGE'
                            }
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </ListItem>

    )
}

export default FormContact;
