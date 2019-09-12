import React from 'react';

class IngredientIterator extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ul className="rowed row-spacer row-spillover">
				{this.props.ingredients.map(
					ingredient => <li>
						<img src={require('../img/'+ingredient.replace(/ /g, '_').substring(' (')+'.png')} 
				            className="item-border" 
				            alt={ingredient}
			            />
						<br/>{ingredient}
					</li>
				)}
			</ul>
		)
	}
}
export default IngredientIterator;