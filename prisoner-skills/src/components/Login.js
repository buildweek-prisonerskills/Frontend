import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import { login } from "../actions/Auth";

class Login extends Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
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

  login = () => {
    this.props
      .login({
        username: this.state.username,
        password: this.state.password
      })
      .then(() => {
        // this.props.history.push("login");
        this.props.history.push("/inmates");
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui middle aligned center aligned grid ui segment">
        <div className="column ui segment">
          <h1 className="ui teal header ">Login</h1>

          <form style={{display:'flex', alignItems:'center',justifyContent:'center', width:'100%', marginTop:'5%'}} className="ui large form ui segment ">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    type="text"
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
                    type="password"
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
              <button
                className="ui fluid large teal submit button"
                onClick={this.login}
              >
                {this.props.loggingIn === true ? (
                  <Loader type="ThreeDots" color="#CCCFBC" />
                ) : (
                  "Log In"
                )}
              </button>{" "}
            </div>
          </form>
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
  { login }
)(Login);
