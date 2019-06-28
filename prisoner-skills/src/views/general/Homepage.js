import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link,NavLink } from 'react-router-dom';
//import PrisonLogin from '../PrisonLogin';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
const Homepage = () => {
	return (
		<div>
				<div className="pushable">



<Zoom>
<div style={{marginTop:'10%'}} className="pusher">
  <div className="ui  vertical masthead center aligned segment">

    <div className="ui text container">
      <h1 className="ui header">
      <Slide right>
	  <img style={{width:'40%'}} alt='p' src={require('../../components/utils/logo.png')} /></Slide>
      </h1>
      <Fade right big cascade>
      <h2>Hire workers .</h2></Fade>
      <Link  to='/prisionDefault' className="ui huge primary button">Get Started <i className="right arrow icon"></i></Link>
    </div>

  </div>




 


 

  
</div>

</Zoom>


</div>
			
			
		</div>
	);
};

export default Homepage;
