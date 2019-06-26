import React, { Component } from "react";
import PropTypes from 'prop-types';
import "../../style/signup.scss";
import '../../style/app.scss';
import '../../style/main.scss';
import { connect } from "react-redux";
import { registerAction } from "../../redux/actions/registerAction";


class Register extends Component {

  constructor (props) {
    super(props);
    this.state = {
      lastname: "",
      firstname: "",
      email: "",
      password: ""
    };
  }
  handleSignup = event => {
    event.preventDefault();
    let form = document.getElementById("signup-form");
    const {
      lastname,
      firstname,
      email,
      password,
      isAdmin,
     } = this.state;
    const signData = {
      lastname: lastname,
      firstname: firstname,
      email: email,
      password: password,
      isAdmin : false
    };
    this.props.registerAction(signData);
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <img src={require("../../style/images/signup.jpg")} className="bg-img"></img>
        <div className="login-content">

          <div className="info">
            <div className="con">
              <img className="image2" src={require("../../style/images/logo3.png")} />
                <h1 className="title">This app. enables any citizen to bring any form of corruption to the notice of
          appropriate authorities and the general public.</h1>
              <p className="head1">LOGIN</p>
              <p><button><a href="/login">LOGIN YOUR ACCOUNT</a></button></p>
            </div>
          </div>
          <form id="signup-form" onSubmit={this.handleSignup}>
          <div className="login">
            <p className="head2">SIGN UP</p>
            <div className="form-wrap">
              <input type="text" placeholder="First Name" id="firstname" onChange={this.handleChange}/>
            </div>
            <div className="form-wrap">
              <input type="text" placeholder="Last Name" id="lastname"  onChange={this.handleChange}/>
            </div>
            <div className="form-wrap">
              <input type="text" placeholder="Email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="form-wrap">
              <input type="password" placeholder="Password" id="password"  onChange={this.handleChange}/>
            </div>

            <div className="form-wrap">
              <p><button type="submit" >CREATE ACCOUNT</button></p>
            </div>
          </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  lastname: PropTypes.string,
  firstname: PropTypes.string,
  handleSignup: PropTypes.func,
  isAdmin: PropTypes.bool,
  onChange: PropTypes.func,
  registerAction: PropTypes.func
};

export const mapStateToProps = state => ({
});

export default connect(mapStateToProps,{ registerAction })(Register);
