import React, { Component } from "react";
import { connect } from "react-redux";
import { Update_Prison, GET_Prison } from "../../actions/Prisons";
import Fade from 'react-reveal/Fade';
class EditPrison extends Component {
  state = {
    name: "",
    id: "",
    available_inmates: "",
    location: ""
  };

  componentDidMount() {
    this.props.GET_Prison();
    const editInmate = this.props.prisons.prisons.filter(inmate => {
      return inmate.id === this.props.match.params.id;
    });

    this.setState({
      id: this.props.match.params.id,
      name: editInmate.name,
      available_inmates: editInmate.available_inmates,
      work_release: editInmate.work_release,
      location: editInmate.location
    });
  }

  onInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSubmitHandle = e => [
    e.preventDefault(),
    console.log(this.state),
    this.props.Update_Prison(this.state).then(res => {
      if (res) {
        this.props.history.push("/MainAdmin");
      }
    })
  ];

  render() {
    return (
      <Fade right>
      <div style={{ margin: "0 5%" }}>
        <h1>Update Prison</h1>
        <form
          style={{ margin: "5% 9%" }}
          class="ui inverted segment"
          onSubmit={this.onSubmitHandle}
        >
          <div class="ui inverted form">
            <div class="field">
              <label>Name</label>
              <input
                type="text"
                onChange={this.onInputChange}
                name="name"
                value={this.state.name}
              />
            </div>

            <div className="field">
              {" "}
              <label>Location</label>
              <input
                onChange={this.onInputChange}
                name="location"
                value={this.state.location}
              />
            </div>

            <button class="ui button blue">Update</button>
          </div>
        </form>
      </div></Fade>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    prisons: state.prison
  };
};

export default connect(
  mapStateToProps,
  { Update_Prison, GET_Prison }
)(EditPrison);
