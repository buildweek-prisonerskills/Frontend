import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";


import { signUp } from "../actions/Auth";

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {


    
    return (
      <div>
       <div className="ui middle aligned center aligned grid">
  <div style={{marginTop:'5%'}} className="column">
    <h2 className="ui teal image header">
      
      <div style={{marginTop:'5%'}} className="content">
       Sign-up for an account
      </div>
    </h2>
    <form  style={{display:'flex', alignItems:'center',justifyContent:'center', width:'100%', }} className="ui large form">
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
           
            <input
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChanges}
              className={
                this.props.error === true ? "error login-input" : "login-input"
              }
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
           
            <input
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChanges}
              className={
                this.props.error === true ? "error login-input" : "login-input"
              }
              required
            />
          </div>
        </div>
        <button className="ui fluid large teal submit button" onClick={this.signUp}>
            {this.props.loggingIn === true ? (
              <Loader type="ThreeDots" color="#CCCFBC" />
            ) : (
              "Sign Up"
            )}
          </button>
      </div>

      <div className="ui error message"></div>

    </form>

    
  </div>
</div>
      </div>
    );
  }

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

  signUp = () => {
    // console.log("sign up works");
    this.props
      .signUp({
        username: this.state.username,
        password: this.state.password
      })
      .then(() => {
        this.props.history.push("/login");
      });
  };
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