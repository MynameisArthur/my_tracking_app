import React from 'react';
import './header.styles.sass';
import {Link} from 'react-router-dom';

const Header = () =>{
    return (
        <div className="header">
            <Link to="/" className="logo-container"><h1 className="logo">T</h1></Link>
            <div className="options">
                <Link to="/tracker" className="option">
                    TRACKER
                </Link>
                <Link to="/contact" className="option">
                    CONTACT
                </Link>
            </div>
        </div>
    )
};
export default Header;
