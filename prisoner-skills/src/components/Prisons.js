
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GET_Prison } from "../actions/Prisons";
import Prison from "./Prison";
class Prisons extends Component {
  static propTypes = {
    prop: PropTypes.string
  };

  componentDidMount() {
    this.props.GET_Prison();
  }

  render() {
    return (
      <div>
        {this.props.prisons.prisons.map((prison, I) => {
          return <Prison key={I} prison={prison} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prisons: state.prison
  };
};

export default connect(
  mapStateToProps,
  { GET_Prison }
)(Prisons);
