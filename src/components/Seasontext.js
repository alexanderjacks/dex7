import React from 'react';

class SeasonText extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ul>
			  {this.props.seasons.map(
			  	season => <li>{season}</li>
			  )}
			</ul>
		)
	}
}
export default SeasonText;