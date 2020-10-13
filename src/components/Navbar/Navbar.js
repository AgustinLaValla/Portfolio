import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import EmailIcon from '@material-ui/icons/Email';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ContactDrawer from '../ContactDrawer/ContactDrawer';
import Sidebar from '../Sidebar/Sidebar';
import { contactDrawerContext } from '../../App';
import CoderIcon from './icons/CoderIcon';
import './Navbar.css';


const Navbar = () => {

    const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
    const [openSidebar, setOpenSidebar] = useState(false);
    const navLinksText = ['Home', 'About', 'Skills', 'Works', 'Contact'];

    const { openContactDrawer, setOpenContactDrawer } = contactDrawerContext();

    const handleInputChange = ({ target }) => setContactData({ ...contactData, [target.name]: target.value });

    return (
        <Fragment>
            <div className="navbar">
                <div>
                    <CoderIcon />
                </div>
                <Box display={{ xs: 'none', md: 'block' }}>
                    <ul>
                        {navLinksText.map(text =>
                            <Link key={text} className="navbar__link" to={`/${text.toLowerCase()}`}>
                                <li >
                                    {text}
                                </li>
                            </Link>
                        )}
                    </ul>
                </Box>

                <Box display={{ xs: 'block', md: 'none' }}>
                    <IconButton style={{ padding: '25px' }} onClick={() => setOpenSidebar(true)}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Box>

                <Fab color="primary" className="navbar__addIcon" onClick={() => setOpenContactDrawer(true)}>
                    <EmailIcon fontSize="large" />
                </Fab>
            </div>

            <ContactDrawer
                open={openContactDrawer}
                handleInputChange={handleInputChange}
                close={() => setOpenContactDrawer(false)}
            />

            <Sidebar
                open={openSidebar}
                close={() => setOpenSidebar(false)}
                navLinksText={navLinksText}
            />
        </Fragment>
    )
}

export default Navbar;
