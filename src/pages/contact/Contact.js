import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { setStyles } from '../../mui-styles/muiStyles';
import './Contact.css';
import { useFormikForm } from '../../components/ContactDrawer/hooks/useFormmikForm';
import { useDataLayer } from '../../components/DataLayer/Datalayer';

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const Contact = () => {
    const classes = useStyles();
    const [, dispatch] = useDataLayer();
    const { formik, loading } = useFormikForm({ dispatch });

    return (
        <div className="contact__container animated fadeIn">
            <Paper className={classes.contact__paper}>
                <div style={{ padding: '20px 10px' }}>
                    <h2 className="contact__title">Contact</h2>
                </div>
                <img src="images/contact.jpg" alt="Contact with Agustín La Valla" style={{ width: '100%' }} />
                <div className="contact__formContainer">
                    <h5>Feel free to contact me for any project</h5>
                    <form className="contact__form" onSubmit={formik.handleSubmit}>
                        <TextField
                            type="text"
                            name="name"
                            id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.name}
                            error={formik.errors.name && formik.touched.name}
                            className={classes.contact__textField}
                            fullWidth

                        />
                        <TextField
                            type="email"
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.email}
                            error={formik.errors.email && formik.touched.email}
                            className={classes.contact__textField}
                            fullWidth
                        />
                        <TextField
                            type="text"
                            name="message"
                            id="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.message}
                            error={formik.errors.message && formik.touched.message}
                            className={classes.contact__textField}
                            multiline={true}
                            rows={3}
                            fullWidth

                        />
                        <Button variant="contained" color="primary" style={{ margin: '30px 0' }} type="submit">
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
                    </form>
                </div>
            </Paper>
        </div>
    )
}

export default Contact
