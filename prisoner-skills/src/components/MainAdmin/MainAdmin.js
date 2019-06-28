import React from "react";
import Prisoners from "../../components/Prisoners";
import Prisons from "../../components/Prisons";
import EditPrisoner from "../../forms/prisoner/EditPrisoner";
import EditPrison from '../../forms/prison/EditPrison'
import { Route, Link, Redirect } from "react-router-dom";
import Prison from "../../components/Prisons";
import navAdmin from "../nav/navAdmin";
import AddInmate from '../../forms/prisoner/AddPrisoner'
const MainAdmin = () => {
  return (
    <div>
      <div className="ui ">
        <Route exact component={navAdmin} />
      </div>
<Route
        exact
        path="/MainAdmin/UpdateInmate/:id"
        render={props => <EditPrisoner {...props} />}
      />
	  <Route
        exact
        path="/MainAdmin/:id"
         component={EditPrison}
      />
      <Route exact path="/MainAdmin/inmates" component={Prisoners} />
      <Route exact path="/MainAdmin/prisons" component={Prisons }   />
      <Prison />
      
	  <Route path='/MainAdmin/Addinmates' component={AddInmate}   />
      
    </div>
  );
};

export default MainAdmin;
