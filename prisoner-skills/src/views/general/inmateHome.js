import React from "react";
import { connect } from "react-redux";

import Fade from 'react-reveal/Fade';
const Prisoner = props => {
  const { name, id, work_release, skills } = props.inmate;
  return (
    
    <div style={{marginTop:'5%',marginBottom:'5%'}} className="ui container">
      <table className="ui  blue table  "><Fade top>
        <thead className="ui four column grid">
          <tr className=" row">
            <th className="column">Name</th>
            <th className="column">Id</th>
            <th className="column">Work Release</th>
            <th className="column">Skills</th>
          </tr>
        </thead></Fade>
        <Fade bottom>
        <tbody className="ui four column grid">
          <tr className=" row">
            <td className="column">{name}</td>
            <td className="column">{id}</td>
            <td className="column">{work_release === 0 ? "true" : "false"}</td>
            <td style={{    fontSize: '0.9rem'}} className="column">{skills}</td>
            <td className="column" />
            <td className="column" />
          </tr>
        </tbody></Fade>
      </table>
    </div>
  );
};

export default connect(
  null,
  {  }
)(Prisoner);
