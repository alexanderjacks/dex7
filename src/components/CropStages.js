import React from 'react';

class CropStages extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ul className="rowed row-spacer row-spillover">
				{this.props.stages.map(
					(stage) => <li>
						<img src={require('../img/'+stage.replace(/ /g, '_')+'.png')} 
				            className="item-border" 
				            alt={stage}
			            />
						<br/>{stage}
					</li>
				)}
			</ul>
		)
	}
}
export default CropStages;