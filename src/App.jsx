import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route,Redirect} from 'react-router-dom';
import TrackerPage from './pages/tracker/tracker.component';
import TrackerList from './pages/tracker-list/tracker-list.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {selectCategoriesForPreview} from './redux/category/category.selectors';

class App extends Component { 
  unsubscribeFromAuth = null;
  componentDidMount()
  {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth)  
      {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{         
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });          
        });
      }
      setCurrentUser(userAuth);
    });

  }
  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render()
  {
    return (
      <div className="App">        
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />        
        <Route path='/tracker' component={TrackerPage} />
        <Route exact path='/tracker_list' component={TrackerList} />
        <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
      </Switch>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({  
    currentUser: selectCurrentUser,
    categoriesArray: selectCategoriesForPreview
});

const mapDispatchToProps = (dispatch)=>{
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
