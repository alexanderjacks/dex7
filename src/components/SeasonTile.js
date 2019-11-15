import React from 'react';

class SeasonTile extends React.Component {
	render() {
		return(
			<div>
				<span>
				{this.props.seasons.includes('Spring')
				? <span><img className="seasonTile" src={require('../img/Spring.png')} /></span> : <></>
				}
				</span>
				<span>
				{this.props.seasons.includes('Summer')
				? <span><img className="seasonTile" src={require('../img/Summer.png')} /></span> : <></>
				}
				</span>
				<span>
				{this.props.seasons.includes('Fall')
				? <span><img className="seasonTile" src={require('../img/Fall.png')} /></span> : <></>
				}
				</span>
				<span>
				{this.props.seasons.includes('Winter')
				? <span><img className="seasonTile" src={require('../img/Winter.png')} /></span> : <></>
				}
				</span>
				<span>
				{this.props.seasons.includes('SpringSummer')
				? <span><img className="seasonTile" src={require('../img/SpringSummer.png')} /></span> : <></>
				}
				</span>
				<span>
				{this.props.seasons.includes('SpringSummerFall')
				? <span><img className="seasonTile" src={require('../img/SpringSummerFall.png')} /></span> : <></>
				}
				</span>
				<span>
				{this.props.seasons.includes('SummerFall')
				? <span><img className="seasonTile" src={require('../img/SummerFall.png')} /></span> : <></>
				}
				</span>
				<span>
				{this.props.seasons.includes('AllYear')
				? <span><img className="seasonTile" src={require('../img/AllYear.png')} /></span> : <></>
				}
				</span>
			</div>
		)
	}
}
export default SeasonTile;
