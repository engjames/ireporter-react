import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterContainer from '../app/container/RegisterContainer';
import LoginContainer from '../app/container/LoginContainer';

class Router extends Component {
  render() {
    return (
      <BrowserRouter >
      <ToastContainer />
        <Switch>
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
