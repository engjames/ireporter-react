import React from "react";
import ReactDOM from "react-dom";
import Router from '../src/redux/Router';
import { Provider } from 'react-redux';
import store from './redux/store';

class Welcome extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

ReactDOM.render(<Provider store={store}><Welcome /></Provider>, document.getElementById("root"));
