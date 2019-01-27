import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import Home from './containers/home/home';
import Login from './containers/login/login';
import Signup from './containers/signup/signup';
import Donate from './containers/donate/donate';
import Adopt from './containers/adopt/adopt'
import Profile from './containers/profile/profile'
 class Router extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/adopt" component={Adopt}/>
          <Route path='/donate' component={Donate}/>
         <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
