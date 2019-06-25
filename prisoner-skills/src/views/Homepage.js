import React from 'react';
 import Prisons from '../components/Prisons' 
import {Link} from 'react-router-dom'
import PrisonLogin from './PrisonLogin'
const Homepage = () => {
    return (
        <div>
            <nav>
               <Link to='/prisonlogin'  component={PrisonLogin}>Prison Administration Login</Link> 
               <Link to='/prisons'  component={Homepage}>Prisons</Link> 
               
            </nav>
              <Prisons/>
        </div>
    );
}

export default Homepage;
