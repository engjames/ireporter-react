import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterContainer from '../app/container/RegisterContainer';
// import { Provider } from 'react-redux';

class Router extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/register" component={RegisterContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
