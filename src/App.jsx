import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';
import TrackerPage from './pages/tracker/tracker.component';
import Header from './components/header/header.component';


class App extends Component {
  render()
  {
    return (
      <div className="App">        
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />        
        <Route path='/tracker' component={TrackerPage} />
      </Switch>
      </div>
    )
  }
}

export default App;
