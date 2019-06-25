import React, { Component } from "react";
import "../../style/signup.scss";
import '../../style/app.scss';
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    const {
      handleChange,
      handleSignup
    } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="card">
              <form id="signup-form"
                onSubmit={handleSignup}>
                <input
                  onChange={handleChange}
                  type="text"
                  id="lastname"
                  placeholder="lastname"
                  className="form-control input-field"
                />
                <br/>
                <input
                  onChange={handleChange}
                  type="text"
                  id="firstname"
                  placeholder="firstname"
                  className="form-control input-field"
                />
                <br/>
                <input
                  onChange={handleChange}
                  type="text"
                  id="email"
                  placeholder="email"
                  className="form-control input-field"
                />
                <br/>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  placeholder="password"
                  className="form-control input-field"
                />
                <br/>
                <button className="signup-btn" type="submit">Signup</button>
                <p className="have-an-account">Already have an account!
                  <Link to="/login">Login</Link></p>
              </form>
            </div></div>
          <div className="col-md-4" />
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
