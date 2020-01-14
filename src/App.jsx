import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';


const FoodPage = ()=>{
  return(
    <div>
      <h1>FOOD Page</h1>
    </div>
  );
};

class App extends Component {
  render()
  {
    return (
      <div className="App">        
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/food' component={FoodPage} />
      </Switch>
      </div>
    )
  }
}

export default App;
