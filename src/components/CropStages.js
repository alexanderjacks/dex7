import React from 'react';

class CropStages extends React.Component {
	render() {
        {/* not using ES6 map() b/c not an array of img names */}
		const allGrowthStages = []
		for (let i=1; i < this.props.stages+1; i++) {
			allGrowthStages.push(
				<li key={this.props.name}>
					<img src={require('../img/'+this.props.name.replace(/ /g, '_')+'_Stage_'+ i +'.png')}
						className="item-plain" 
				        alt={this.props.name}
					/>
				</li>
			)
		}
		return(<div>{allGrowthStages}</div>)
	}
}
export default CropStages;