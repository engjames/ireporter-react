import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../../style/signup.scss";
import '../../style/app.scss';
import '../../style/main.scss';
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/loginAction";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }


  onChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  }

  checkPassword = (userPassword) => {
    if (userPassword === undefined) {
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {

      email: this.state.email,
      password: this.state.password

    };

    if (!this.checkPassword(this.state.password)) {
      this.setState({ errors: { userPassword: 'Password field is empty' } });
    } else {
      this.props.loginAction(userData, this.props);
    }
  }

  render() {
    return (
      <div>
        <img src={require("../../style/images/signup.jpg")} className="bg-img" />
        <div className="login-content">
          <div className="info">
            <div className="con">
              <img src={require("../../style/images/logo3.png")} />
              <h1 className="title">This app. enables any citizen to bring any form of corruption to the notice of appropriate authorities and the general public.</h1>
              <p className="head1">USER SIGN UP</p>
              <p><button><a href="/register">CREATE AN ACCOUNT</a></button></p>
            </div>
          </div>
          <form id="signup-form" onSubmit={this.handleSubmit}>
            <div className="login">
              <p className="head2">USER LOGIN</p>
              <div className="form-wrap">
                <input type="text" placeholder="Email" id="email" onChange={this.onChange} required />
              </div>

              <div className="form-wrap">
                <input type="password" placeholder="Password" id="password" onChange={this.onChange} required />
              </div>
              <div className="form-wrap">
                <button type="submit">LOGIN</button>
              </div>
            </div>
          </form>
        </div>
      </div >
    );
  };
};
Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  checkPassword: PropTypes.func,
  onChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  loginAction: PropTypes.func
};

export const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps, { loginAction })(Login));

