import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
const navHome = () => {
    return (
        <div>
              <div className="ui large secondary  pointing menu">
        
              <div className="ui container">
       
        <NavLink to='/prisionDefault' className=" item">Prisons</NavLink>
        <NavLink to='/inmateHome' className=" item">Inmates</NavLink>
       
        <div className="right item">
          <Link to='/login' className="ui primary  button">Log in</Link>
          <Link style={{marginLeft:'1%'}} className="ui button"  to='/signUp'>Sign Up</Link>
        </div>
      </div>

</div>

      <div className="ui text container">
      <h1 className="ui header">
      <Slide right>
	  <img alt='p' src={require('../utils/logo.png')} /></Slide>
      </h1>
     <Fade right big cascade> <h2>Hire workers  whenever you want when you want to.</h2></Fade>
  
    </div>       

        </div>
    );
}

export default navHome;
