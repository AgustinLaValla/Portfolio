import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import { setStyles } from '../../mui-styles/muiStyles';
import FormContact from './FormContact';
import ContactDrawerHeader from './ContactDrawerHeader';
import './ContactDrawer.css';

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));


const ContactDrawer = ({ open, handleInputChange, close }) => {
    const classes = useStyles();

    const [fullScreen, setFullScreen] = useState(false);

    return (
        <Drawer anchor="right" open={open} onClose={close}>
            <div
                className={fullScreen ? classes.listFullScreen : classes.list}
                role="presentation"
            >
                <List >
                    <ContactDrawerHeader close={close} fullScreen={fullScreen} setFullScreen={setFullScreen} />
                    <FormContact handleInputChange={handleInputChange} />
                </List>

            </div>
        </Drawer>
    )
}

export default ContactDrawer
