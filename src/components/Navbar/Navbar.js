import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import EmailIcon from '@material-ui/icons/Email';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css';


const Navbar = () => {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
    const navLinksText = ['Home', 'About', 'Skills', 'Works', 'Contact']

    const handleInputChange = ({ target }) => setContactData({ ...contactData, [target.name]: target.value });

    return (
        <Fragment>
            <div className="navbar">
                <div>
                    <img className="navbar__coderIcon" src="images/html-coding.png" alt="" />
                </div>
                <ul>
                    {navLinksText.map(text =>
                        <li>
                            <Link className="navbar__link">
                                {text}
                            </Link>
                        </li>
                    )}
                </ul>

                <Fab color="primary" className="navbar__addIcon" onClick={() => setOpenSidebar(true)}>
                    <EmailIcon  fontSize="large" />
                </Fab>
            </div>

            <Sidebar open={openSidebar} handleInputChange={handleInputChange} close={() => setOpenSidebar(false)} />
        </Fragment>
    )
}

export default Navbar;
