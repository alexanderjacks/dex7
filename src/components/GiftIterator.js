import React from 'react';

class GiftIterator extends React.Component {
	render() {
		return(
				<div style={{
					backgroundColor: this.props.bgcolor,
					padding: '1rem',
					maxWidth: '19vw'
				}}>
				<h3>{this.props.title}</h3>
					{this.props.gifts.map(
						(gift) => <li className="tinted-card">
							<img src={require('../img/'+gift.replace(/ /g, '_')+'.png')}
					            className="tiny-img"
					            alt={gift}
											style={{
												backgroundColor: this.props.bgcolor,
												opacity: 0.7
											}}
				            />
							<br/>
							<h6 className="word-wrap-break">
								{gift}
							</h6>
						</li>
					)}
				</div>
		)
	}
}
export default GiftIterator;
