import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import { signUp } from "../actions/Auth";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    facility_id: ""
  };

  componentDidMount() {
    if (this.props.token) {
      this.props.history.push("/inmates");
    }
  }
  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUp = e => {
    // console.log("sign up works");
    e.preventDefault();
    this.props
      .signUp({
        username: this.state.username,
        password: this.state.password,
        facility_id: this.state.facility_id
      })
      .then(() => {
        this.props.history.push("/login");
      });
  };
  render() {
    return (
      <div>
        <div className="ui middle aligned center aligned grid">
          <div style={{ marginTop: "5%" }} className="column">
            <h2 className="ui teal image header">
              <div style={{ marginTop: "5%" }} className="content">
                Sign-up for an account
              </div>
            </h2>
            <form
              onSubmit={this.signUp}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%"
              }}
              className="ui large form"
            >
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon" />

                    <input
                      placeholder="username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChanges}
                      className={
                        this.props.error === true
                          ? "error login-input"
                          : "login-input"
                      }
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon" />

                    <input
                      placeholder="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChanges}
                      className={
                        this.props.error === true
                          ? "error login-input"
                          : "login-input"
                      }
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon" />

                    <input
                      placeholder="facility_id"
                      name="facility_id"
                      value={this.state.facility_id}
                      onChange={this.handleChanges}
                      className={
                        this.props.error === true
                          ? "error login-input"
                          : "login-input"
                      }
                      required
                    />
                  </div>
                </div>
                <button
                  className="ui fluid large teal submit button"
                  onClick={this.signUp}
                >
                  {this.props.loggingIn === true ? (
                    <Loader type="ThreeDots" color="#CCCFBC" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>

              <div className="ui error message" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ token, loggingIn, error }) => ({
  token,
  loggingIn,
  error
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
