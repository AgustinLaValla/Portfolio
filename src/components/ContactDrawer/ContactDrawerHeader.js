import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CloseIcon from '@material-ui/icons/Close';
import { setStyles } from '../../mui-styles/muiStyles';
import ListItem from '@material-ui/core/ListItem';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Tooltip from '@material-ui/core/Tooltip';
import { useFullScreenIcon } from './hooks/useFullScreenIcon';
import './ContactDrawer.css';


const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const ContactDrawerHeader = ({ close, fullScreen, setFullScreen }) => {
    const classes = useStyles();
    const showFullScreenIcons = useFullScreenIcon();
    

    return (
        <ListItem className={classes.listHeader}>
            <CloseIcon className={classes.listHeaderCloseIcon} onClick={close} />
            {
                showFullScreenIcons && (
                    fullScreen
                        ?
                        <Tooltip title="Exit" classes={{ tooltip: classes.tooltip }}>
                            <FullscreenExitIcon className={classes.listHeaderFullScreenIcon} onClick={() => setFullScreen(false)} />

                        </Tooltip>
                        :
                        <Tooltip title="FullScreen" classes={{ tooltip: classes.tooltip }}>
                            <FullscreenIcon className={classes.listHeaderFullScreenIcon} onClick={() => setFullScreen(true)} />
                        </Tooltip>
                )
            }
            <div className={!fullScreen ? 'sidebar__dataContainer' : 'sidebar__dataContainer fullScreen'}>
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
    );
}



export default ContactDrawerHeader;
