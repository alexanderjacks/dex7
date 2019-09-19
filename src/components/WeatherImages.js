import React from 'react';

class WeatherImages extends React.Component {
	render() {
		return(
			<div className="rowed">
				{/* if you expand them out, React offers visually-pleasing conditionals */}
				<span>
				{this.props.weather.includes('Sun')
				? 
					<span>
						<img src={require('../img/tinytile-Sun.png')} />
						<h6>Sun</h6>
					</span>
				:
					<br/>
				}
				</span>
				<span>
				{this.props.weather.includes('Rain')
				? 
					<span>
						<img src={require('../img/tinytile-Rain.png')} />
						<h6>Rain</h6>
					</span>
				:
					<br/>
				}
				</span>
				<span>
				{this.props.weather.includes('Wind')
				? 
					<span>
						<img src={require('../img/tinytile-WindSpring.png')} />
						<h6>Wind</h6>
					</span>
				:
					<br/>
				}
				</span>
				<span>
				{this.props.weather.includes('Any')
				? 
					<span>
						<img src={require('../img/tinytile-Special.png')} />
						<h6>Any</h6>
					</span>
				:
					<br/>
				}
				</span>
			</div>
		)
	}
}
export default WeatherImages;