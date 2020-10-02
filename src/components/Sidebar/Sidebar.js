import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { setStyles } from '../../mui-styles/muiStyles';
import Contact from '@material-ui/icons/Mail';
import Home from '@material-ui/icons/Home';
import About from '@material-ui/icons/Info';
import Works from '@material-ui/icons/Work';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Skills } from './icons/capability.svg';

import './Sidebar.css';
import SidebarHeader from './SidebarHeader';

const useStyles = makeStyles(theme => setStyles(theme));

const Sidebar = ({ open, close, navLinksText }) => {
    const classes = useStyles();
    const icons = [
        <Home />,
        <About />,
        <SvgIcon className={classes.mySvgStyle}>
            <Skills />
        </SvgIcon>,
        <Works />,
        <Contact />
    ];


    return (
        <Drawer anchor="right" open={open} onClose={close} className={classes.sidebar}>
            <List className={classes.sidebarList}>

                <SidebarHeader close={close} />
                
                {navLinksText.map((text, index) =>
                    <ListItem button key={text} className={classes.sidebarListItem}>
                        <ListItemIcon style={{ color: '#6A1B9A' }}>{icons[index]}</ListItemIcon>
                        <ListItemText style={{ color: '#6A1B9A' }}>{text}</ListItemText>
                    </ListItem>
                )}
            </List>
        </Drawer>
    )
}

export default Sidebar
