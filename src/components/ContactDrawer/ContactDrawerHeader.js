import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CloseIcon from '@material-ui/icons/Close';
import { setStyles } from '../../mui-styles/muiStyles';
import ListItem from '@material-ui/core/ListItem';
import './ContactDrawer.css';


const useStyles = makeStyles(theme => setStyles(theme));

const ContactDrawerHeader = ({close}) => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listHeader}>
            <CloseIcon className={classes.listHeaderCloseIcon} onClick={close} />
            <div className="sidebar__dataContainer">
                <div className="sidebar__imageContainer">
                    <img src="images/avatar.jpg" className="sidebar__profileImage" alt="Agustín La Valla" />
                </div>
                <div className="sidebar__infoContainer">
                    <h1>Agustín La Valla</h1>
                    <div className="sidebar__profesionContainer">
                        <img className="sidebar__codeIcon" src="images/code.png" alt="" />
                        <h3>Web Developer</h3>
                    </div>
                </div>
            </div>
        </ListItem>
    )
}

export default ContactDrawerHeader;
