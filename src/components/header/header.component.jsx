import React from 'react';
import './header.styles.sass';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({currentUser}) =>{
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
                {
                    currentUser ?
                    <div className="option" onClick={()=>auth.signOut()}> SIGN OUT </div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return{
        currentUser: state.user.currentUser
    };
}

export default connect(mapStateToProps)(Header);
