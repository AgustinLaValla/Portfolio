import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';
import './Sidebar.css';

const useStyles = makeStyles(theme => setStyles(theme));

const SidebarHeader = ({ close }) => {
    const classes = useStyles();
    
    return (
        <div className="sidebar__header">
            <ArrowBackIcon className={classes.listHeaderCloseIcon} onClick={close} />
            <div className="sidebar__headerData">
                <div className="sidebar__avatarContainer">
                    <img src="images/avatar.jpg" className="sidebar__avatar" alt="Agustín La Valla" />
                </div>
                <div className="sidebar__dataBox">
                    <h1>Agustín La Valla</h1>
                    <h3>agulavalla@gmail.com</h3>
                    <div className="sidebar__icons">
                        <GitHubIcon fontSize="small" style={{ cursor: 'pointer', marginRight: '10px' }} />
                        <LinkedInIcon fontSize="small" style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarHeader;
