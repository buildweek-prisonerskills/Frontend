import React from "react";
import { connect } from "react-redux";
import { Update_Inmate } from "../actions/Prisoners";
const UpdateButton = props => {
  console.log("Update button",props.inmate);
  const {inmate} = props
  return (
    <div>
      <button className="ui basic red button"
        onClick={() =>{ props.Update_Inmate( inmate);} }
      >
        Update
      </button>
    </div>
  );
};

export default connect(
  null,
  { Update_Inmate }
)(UpdateButton);
