import React from 'react';

class GiftIterator extends React.Component {
	render() {
		return(
			<div
				className="coled tinted-card"
				style={{
					backgroundColor: this.props.bgcolor,
					opacity: 0.7
				}}
			>
				<ul className="rowed row-spacer row-spillover">
					{this.props.gifts.map(
						(gift) => <li>
							<img src={require('../img/'+gift.replace(/ /g, '_')+'.png')}
					            className="item-border"
					            alt={gift}
				            />
							<br/>{gift}
						</li>
					)}
				</ul>
				<h3>{this.props.title}</h3>
			</div>
		)
	}
}
export default GiftIterator;
