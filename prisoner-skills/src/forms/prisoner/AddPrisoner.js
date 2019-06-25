import React, { Component } from "react";
import { connect } from "react-redux";
import { Add_Inmate } from "../../actions/Prisoners";

class AddPrisoner extends Component {
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
    this.props.Add_Inmate(this.state)
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

          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { Add_Inmate }
)(AddPrisoner);
