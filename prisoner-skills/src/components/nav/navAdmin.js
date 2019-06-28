import React from 'react';
import {Link,NavLink} from 'react-router-dom'
const navAdmin = () => {
    return (
        <div>
              <div className="ui large secondary  pointing menu">
        
              <div className="ui container">
       
        <NavLink to='/MainAdmin' className=" item">Prisons</NavLink>
        <NavLink to='/MainAdmin/inmates' className=" item">Inmates</NavLink>
        <NavLink to='/MainAdmin/Addinmates' className=" item">AddInmates</NavLink>
        <div className="right item">
          <h1 className="ui header">
	  <img alt='p' src={require('../utils/logo.png')} />
      </h1>
        </div>
        
      </div>

</div>

          

        </div>
    );
}

export default navAdmin;
