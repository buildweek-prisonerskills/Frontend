import React, { Component } from "react";
import { connect } from "react-redux";
import { Update_Inmate } from "../../actions/Prisoners";

class UpdatePrisoner extends Component {
  state = {
	name: "",
	facility_id:Date.now(),
    work_release: "False",
    skills: ""
  };

  onInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSubmitHandle = e => [
	e.preventDefault(),
	console.log(this.state),
    this.props.Update_Inmate(this.state)
  ];

  render() {
	  
    return (
      <div>
        <form onSubmit={this.onSubmitHandle}>
          <div>
            <input
              type="text"
              onChange={this.onInputChange}
              name="name"
              value={this.state.name}
            />
          </div>
       
          <div className="field">
            {" "}
            <input
              onChange={this.onInputChange}
              name="skills"
              value={this.state.skills}
            />
          </div>

          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { Update_Inmate }
)(UpdatePrisoner);
