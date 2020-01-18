import React from 'react';
import './header.styles.sass';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import TrackerButton from '../tracker-icon/tracker-icon.component';
import TrackerDropdown from '../tracker-dropdown/tracker-dropdown.component';


const Header = ({currentUser,hidden}) =>{
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
                <Link to="/tracker_list" className="option">
                    LIST
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={()=>auth.signOut()}> SIGN OUT </div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
                <TrackerButton />               
            </div>
            {
                hidden ? null : (<TrackerDropdown />)

            }
        </div>
    )
};

const mapStateToProps = ({user: {currentUser},tracker: {hidden}})=>{
    return{
        currentUser,
        hidden
    };
}

export default connect(mapStateToProps)(Header);
