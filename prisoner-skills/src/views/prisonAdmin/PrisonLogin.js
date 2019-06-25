import React, { Component } from "react";
import {connect} from 'react-redux'
import {Add_Prison} from '../actions/Prisons'

class PrisonLogin extends Component {
  state = { prisonName: "", address: "" };

  onhandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddPrison = e => {
 e.preventDefault()
const Prison =this.state
this.props.Add_Prison(Prison)
this.setState({ prisonName: "", address: "" })
 
  };

  render() {
    return (
      <div>
        <h1>Create Account</h1>
        <form>
          Prison Name:{" "}
          <input
            onChange={this.onhandleChange}
            type="text"
            name="prisonName"
            value={this.state.prisonName}
          />
          Address:{" "}
          <input
            onChange={this.onhandleChange}
            name="Address"
            type="text"
            value={this.state.address}
          />
        </form>

        <h1>Login</h1>
        <form>
          Prison Name:{" "}
          <input
            onChange={this.onhandleChange}
            type="text"
            name="prisonName"
            value={this.state.prisonName}
          />
          Address:{" "}
          <input
            onChange={this.onhandleChange}
            name="Address"
            type="text"
            value={this.state.address}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
   
    return{
     prisons:state.prisons
    }
}


export default  connect(mapStateToProps,{Add_Prison}) (PrisonLogin);
