import React, { Component, lazy,Suspense } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {selectCategoriesForPreview} from './redux/category/category.selectors';
import {checkUserSession} from './redux/user/user.actions';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(()=>import('./pages/homepage/homepage.component'));
const TrackerPage = lazy(()=>import('./pages/tracker/tracker.component'));
const SignInAndSignUpPage = lazy(()=>import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const TrackerList = lazy(()=> import('./pages/tracker-list/tracker-list.component'));

class App extends Component { 
  unsubscribeFromAuth = null;
  componentDidMount()
  {
    const {checkUserSession} = this.props;
    checkUserSession();
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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />  
            <Route path='/tracker' component={TrackerPage} />
            <Route exact path='/tracker_list' component={TrackerList} />
            <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({  
    currentUser: selectCurrentUser,
    categoriesArray: selectCategoriesForPreview
});
const mapDispatchToProps = dispatch =>({
  checkUserSession: ()=> dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
