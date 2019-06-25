import React, { Component } from "react";
import { connect } from "react-redux";
import { registerAction } from "../../redux/actions/registerAction";
import Register from "../components/Register";

export class Registers extends Component {
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
    const { lastname, firstname, email, password } = this.state;
    const signData = {
      lastname: lastname,
      firstname: firstname,
      email: email,
      password: password
    };
    if (form) {
      form.reset();
    }
    this.props.registerAction(signData);
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render () {
    const { signupErrors, signupResponse } = this.props;
    return (
      <div>
        <Register
          signupResponse={signupResponse}
          signupErrors={signupErrors}
          handleChange={this.handleChange}
          handleSignup={this.handleSignup}
        />
      </div >
    );
  }
}

export const mapStateToProps = state => ({
  signupErrors: state.signup.signupErrors,
  signupResponse: state.signup.signupResponse
});

// export default connect( mapStateToProps, { registerAction })(Registers);
export default Registers;
