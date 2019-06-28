import React from "react";
import { connect } from "react-redux";
import Rotate from 'react-reveal/Rotate';
const Prison = props => {
  const { name, location } = props.prison;
  console.log("Almost Fixed", props);

  return (
    <div style={{marginTop:'5%',marginBottom:'5%'}} className="ui container">
      <table className="ui  blue table  ">
      <Rotate top right>
        <thead
          style={{ display: " flex", justifyContent: "center" }}
          className="ui four column grid"
        >
          <tr className=" row">
            <th className="column">Name</th>
            <th className="column">Address</th>
            <th className="column">Number of Prisoners</th>
          </tr>
        </thead></Rotate>
        <Rotate top left>
        <tbody className="ui four column grid">
          <tr
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              margin: "0 auto",
              alignItems: "center",
			  marginLeft: '9%',
			  fontWeight:'300'
            }}
            className=" row"
          >
            <td className="column">{name}</td>
            <td className="column">{location}</td>
            <td className="column">{0} </td>

            <td className="column"> </td>
          </tr>
        </tbody></Rotate>
      </table>
    </div>
  );
};

export default connect(
  null,
  {}
)(Prison);
