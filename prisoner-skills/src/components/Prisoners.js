import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {GET_Inmate} from '../actions/Prisoners'
import Prisoner from './Prisoner'
class Prisoners extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

componentDidMount(){
    this.props.GET_Inmate()
}

  render() {
    console.log(this.props.prisoners.prisoners)
    return (
      <div>
       { this.props.prisoners.prisoners.map(inmate =>{
       return  <Prisoner key={inmate.id}  inmate={inmate}/>
            
       })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return{
      prisoners:state.prisoners
  }

}


export default connect(mapStateToProps,{GET_Inmate})(Prisoners)
