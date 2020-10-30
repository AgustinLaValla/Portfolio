import React, { useState } from 'react';
import Datalayer from '../DataLayer/Datalayer';
import Drawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ContactDrawerHeader from './ContactDrawerHeader';
import FormContact from './FormContact';
import { useDataLayer } from '../DataLayer/Datalayer';
import { setStyles } from '../../mui-styles/muiStyles';
import './ContactDrawer.css';

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));


const ContactDrawer = ({ open, handleInputChange, close }) => {
    const classes = useStyles();

    const [fullScreen, setFullScreen] = useState(false);
    const [,dispatch] = useDataLayer();
    
    return (
        <Datalayer>
            <Drawer anchor="right" open={open} onClose={close}>
                <div
                    className={fullScreen ? classes.listFullScreen : classes.list}
                    role="presentation"
                >
                    <List >
                        <ContactDrawerHeader close={close} fullScreen={fullScreen} setFullScreen={setFullScreen} />
                        <FormContact handleInputChange={handleInputChange} dispatch={dispatch}/>
                    </List>

                </div>
            </Drawer>
        </Datalayer>
    )
}

export default ContactDrawer;
