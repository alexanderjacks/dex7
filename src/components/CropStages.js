import React from 'react';

class CropStages extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="rowed row-spacer row-spillover">
				{this.props.stages}<br/>
				{this.props.name}<br/>
			</div>
		)
	}
}
export default CropStages;