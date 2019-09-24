import React from 'react';

class CropStages extends React.Component {
	render() {
        {/* not using ES6 map() b/c not an array of img names */}
		let counter = 1
		const allGrowthStages = []
		while (counter < this.props.stages+1) {
			allGrowthStages.push(
				<li key={this.props.name}>
					<img src={require('../img/'+this.props.name.replace(/ /g, '_')+'_Stage_'+counter+'.png')}
						className="item-plain" 
				        alt={this.props.name}
					/>
				</li>
			)
			counter++
		}
		return(<div>{allGrowthStages}</div>)
	}
}
export default CropStages;