import React from 'react';
import './header.styles.sass';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';


const Header = ({currentUser,hidden,signOutStart}) =>{
    return (
        <div className="header">
            <Link to="/" className="logo-container"><h1 className="logo">T</h1></Link>
            <div className="options">
                <Link to="/tracker" className="option">
                    ADD TRACKER
                </Link>
                <Link to="/contact" className="option">
                    CONTACT
                </Link>
                <Link to="/tracker_list" className="option">
                    LIST
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={signOutStart}> SIGN OUT </div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }                           
            </div>            
        </div>
    )
};

const mapStateToProps = createStructuredSelector({    
        currentUser: selectCurrentUser         
});

const mapDispatchToProps = dispatch => ({
    signOutStart: ()=> dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
