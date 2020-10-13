import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';
import './Contact.css';

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const initialFormState = {
    name: '',
    email: '',
    message: ''
}

const Contact = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = (ev) => {
        const { name } = ev.target;
        const { value } = ev.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        console.log(formData);
    }

    return (
        <div className="contact__container animated fadeIn">
            <Paper className={classes.contact__paper}>
                <div style={{ padding: '20px 10px' }}>
                    <h2 className="contact__title">Contact</h2>
                </div>
                <img src="images/contact.jpg" alt="Contact with Agustín La Valla" style={{ width: '100%' }} />
                <div className="contact__formContainer">
                    <h5>Send me a message using the contact form below</h5>
                    <form className="contact__form">
                        <TextField
                            id="name"
                            name="name"
                            label="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={classes.contact__textField}
                            fullWidth

                        />
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={classes.contact__textField}
                            fullWidth

                        />
                        <TextField
                            id="message"
                            name="message"
                            label="Enter a message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={classes.contact__textField}
                            multiline={true}
                            rows={3}
                            fullWidth

                        />

                        <Button variant="contained" color="primary" style={{ margin: '30px 0' }}>Submit</Button>
                    </form>
                </div>
            </Paper>
        </div>
    )
}

export default Contact
