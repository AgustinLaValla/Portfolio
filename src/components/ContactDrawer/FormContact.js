import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';
import { fieldsData } from './FormContactData';
import './ContactDrawer.css';

const useStyles = makeStyles(theme => setStyles(theme));


const FormContact = ({ handleInputChange }) => {
    const classes = useStyles();
    return (

        <ListItem className={classes.listContact}>
            <h4 >DRINK A COFFE WITH ME TODAY</h4>
            <form className="sidebar__contactForm">

                {fieldsData.map(data =>
                    <Grid container className={classes.formGroupGridContainer}>
                        <Grid item xs={3}>
                            <label htmlFor={data.name}>{data.labelText}</label>
                        </Grid>

                        <Grid item xs={9}>
                            <TextField
                                type="text"
                                name={data.name}
                                multiline={data.multiline}
                                rows={data.rows ? data.rows : null}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                )}

                <Grid container className={classes.formGroupGridContainer}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                        <Button variant="contained" color="primary" className={classes.contactFormBtn}>
                            SEND MESSAGE
                       </Button>
                    </Grid>
                </Grid>
            </form>
        </ListItem>
    )
}

export default FormContact
