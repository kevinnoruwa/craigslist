

import React, { Component } from 'react';
import Header from  "./includes/header"
import Home from  "./home"
import listings  from  "./listings"
import Category from "./category"

import Details  from "./details"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class App extends Component {
  constructer(){

  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/"  component={Home} />
          <Route exact path="/:nyc"  component={Home} />
          <Route exact path="/:city/:category"  component={Category} />
          <Route exact path="/:city/:category/:listings"  component={listings} />
          <Route exact path="/:city/:category/:listings/:item"  component={Details}/>
        </div>
      </Router>
      
      
    );
  }
}

export default App;


