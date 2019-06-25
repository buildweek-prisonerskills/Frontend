import React from 'react';

const Prisoner = (props) => {
   const{name ,id ,work_release,skills} = props.inmate
    return (
        <div className='ui container'>
           
            <table className="ui inverted blue table  ">
  <thead className='ui four column grid'  >
    <tr className=" row" >
      <th className="column">Name</th>
      <th className="column">Id</th>
      <th className="column">Work Release</th>
      <th className="column">Skills</th>
    </tr>
  </thead>
  <tbody className='ui four column grid'>
    <tr className=" row" >
      <td className="column">{name}</td>
      <td className="column">{id}</td>
      <td className="column">{work_release === 0 ? 'true' : 'false'}</td>
      <td className="column">{skills}</td>
    </tr>
    
  </tbody>
</table>
        </div>
    );
}

export default Prisoner;
