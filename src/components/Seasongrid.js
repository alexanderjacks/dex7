import React from 'react';

class Seasongrid extends React.Component {
	render() {
		return(
			<div>
			<div className="rowed">
				{/* if you expand them out, React offers visually-pleasing conditionals */}
				<span>
				{this.props.seasons.includes('Spring')
				? 
					<span>
						<img src={require('../img/tinytile-Spring.png')} />
					</span>
				:
					<span>
						<img src={require('../img/tinytile-nonSpring.png')} />
					</span>
				}
				</span>
				<span>
				{this.props.seasons.includes('Summer')
				? 
					<span>
						<img src={require('../img/tinytile-Summer.png')} />
					</span>
				:
					<span>
						<img src={require('../img/tinytile-nonSummer.png')} />
					</span>
				}
				</span>
			</div>
			<div className="rowed">
				<span>
				{this.props.seasons.includes('Fall')
				? 
					<span>
						<img src={require('../img/tinytile-Fall.png')} />
					</span>
				:
					<span>
						<img src={require('../img/tinytile-nonFall.png')} />
					</span>
				}
				</span>
				<span>
				{this.props.seasons.includes('Winter')
				? 
					<span>
						<img src={require('../img/tinytile-Winter.png')} />
					</span>
				:
					<span>
						<img src={require('../img/tinytile-nonWinter.png')} />
					</span>
				}
				</span>
			</div>
			</div>
		)
	}
}
export default Seasongrid;