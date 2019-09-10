import React from 'react';

class Seasongrid extends React.Component {
   constructor(props) {
    super(props);
  }
   render(){
   return(
    <ol>
      {this.props.seasons.map(season => <li>{season}</li>)}
    </ol>
    )
   }
   	
}

export default Seasongrid;