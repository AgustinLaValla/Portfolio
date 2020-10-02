import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import { setStyles } from '../../mui-styles/muiStyles';
import FormContact from './FormContact';
import ContactDrawerHeader from './ContactDrawerHeader';
import './ContactDrawer.css';

const useStyles = makeStyles(theme => setStyles(theme));


const ContactDrawer = ({ open, handleInputChange, close }) => {
    const classes = useStyles();
    return (
        <Drawer anchor="right" open={open} onClose={close}>
            <div
                className={classes.list}
                role="presentation"
            >
                <List >
                    <ContactDrawerHeader close={close} />
                    <FormContact handleInputChange={handleInputChange}/>
                </List>

            </div>
        </Drawer>
    )
}

export default ContactDrawer
