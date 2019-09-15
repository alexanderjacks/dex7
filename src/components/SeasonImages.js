import React from 'react';

class SeasonImages extends React.Component {
	render() {
		return(
			<div className="rowed">
				{/* if you expand them out, React offers visually-pleasing conditionals */}
				<span>
				{this.props.seasons.includes('Spring')
				? 
					<span>
						<img src={require('../img/tinytile-Spring.png')} />
						<h6>Spring</h6>
					</span>
				:
					<br/>
				}
				</span>
				<span>
				{this.props.seasons.includes('Summer')
				? 
					<span>
						<img src={require('../img/tinytile-Summer.png')} />
						<h6>Summer</h6>
					</span>
				:
					<br/>
				}
				</span>
				<span>
				{this.props.seasons.includes('Fall')
				? 
					<span>
						<img src={require('../img/tinytile-Fall.png')} />
						<h6>Fall</h6>
					</span>
				:
					<br/>
				}
				</span>
				<span>
				{this.props.seasons.includes('Winter')
				? 
					<span>
						<img src={require('../img/tinytile-Winter.png')} />
						<h6>Winter</h6>
					</span>
				:
					<br/>
				}
				</span>
			</div>
		)
	}
}
export default SeasonImages;