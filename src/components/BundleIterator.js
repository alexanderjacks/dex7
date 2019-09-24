import React from 'react';

class BundleIterator extends React.Component {
	render() {
		return(
			<ul className="rowed row-spacer row-spillover">
				{this.props.requirements.map(
					(requirement) => <li>
						<img src={require('../img/'+requirement.replace(/ /g, '_')+'.png')} 
				            className="item-border" 
				            alt={requirement}
			            />
						<br/>{requirement}
					</li>
				)}
			</ul>
		)
	}
}
export default BundleIterator;