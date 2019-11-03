import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SeasonImages from './SeasonImages.js';
import WeatherImages from './WeatherImages.js';

import Button from '@material-ui/core/Button';

import '../App.css';

class Fish extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.bundleRiverFish = this.bundleRiverFish.bind(this);
  }
  sortByPriceAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.BasePrice - b.BasePrice))
    });
    console.log("Sort Price Asc");
  }
  sortByPriceDesc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (b.BasePrice - a.BasePrice))
    });
    console.log("Sort Price Desc");
  }
  sortByNameAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Name.localeCompare(b.Name)))
    });
    console.log("Sort Name Asc");
  }
  bundleRiverFish() {
    this.setState(prevState => {
      this.state.categoricals.filter(fish => fish.Location == 'River');
    });
    console.log("Sort Only River Fish Bundle");
  }

  componentWillMount() {
    console.log("Minerals need more recipes!");
    this.setState({categoricals: this.props.categoricals});
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="categorical">
         {/* needs own component from here on down, fields will reflect json types */}
        <div className="css3frame-border-4">
        <div className="css3frame-border-3">
        <div className="css3frame-border-2">
        <div className="css3frame-border-1">


      {/* elaborate background image decision code, for CSS class via .Location prop */}
        <div className={item.Location[0].replace(/ /g, '_')+ " coled"}>

        <div className="css3frame-card-back">
        <div className="css3frame-card-padding">
          {/* place and time metadata in text */}
          <div className="rowed row-spacer">
            {/* display image on left */}
			<span className="coled">
				<h2 className="text-shadow-white">{item.Name}</h2>
				<h3 className="text-shadow-white">
        <ul className="coled">{item.Location && item.Location.map(
          Location => <li>{Location.replace(/Witchs/g, "Witch's")}</li>
          )}</ul>
        <SeasonImages seasons={item.Season} />
        <ul className="coled">{item.Time.map && item.Time.map(
          Time => <li>{Time}</li>
          )}
        </ul>
        <WeatherImages weather={item.Weather} />
        </h3>

			</span>
            <span className="coled">
	            <img src={require('../img/'+item.Name.replace(/ /g, '_')+'.png')}
	            className="item-border"
	            alt={item.Name}
	            />
	            <h3>{item.BasePrice}g</h3>
              <h4>{item.Behaviour}&nbsp;{item.ChallengeScore}</h4>
            </span>
            {/* display metadata on right */}
          </div>
          <div className="rowed row-spacer">
            <h4 class="text-shadow-white">
              <hr/>
              <div className="max400px">
                {item.Notes &&
                  <h4>🔎 {item.Notes}</h4>}
                {item.Description &&
                  <h4>
                	📕: {item.Description}
                  </h4>
                }
              </div>
              {/* could use refactoring into own Uses/Bundles component */}
              <span className="coled">
              	{item.Uses && item.Uses.map(
              		(Use) => (
                    <span>
                    <img src={require('../img/'+Use.replace(/ /g, '_')+'.png')}
                      className="item-border"
                      alt={item.Use}
                    />
                    <h4>{
                      Use
                    }</h4>
                    </span>
                  )
              	)}
              </span>
            </h4>
          </div>

        </div>
        </div>

        {/* styling of item frame */}
        </div>
        </div>
        </div>
        </div>
        </div>
      </li>
    );

    return (
      <div className="App">

        {/* buttons, tied to App constructor logic att */}
        <div className="App-header-ctrls">
            <a href="#bundleRiverFish"onClick={this.bundleRiverFish}>
              <Button>
                  <span>River&nbsp;Fish&nbsp;</span>
                  <span>🐟</span>
              </Button>
            </a>
            <a href="#Price_Ascending"onClick={this.sortByPriceAsc}>
              <Button>
                  <span>Lowest&nbsp;Price&nbsp;</span>
                  <span>💰</span>
              </Button>
            </a>
            <a href="#Price_Descending"onClick={this.sortByPriceDesc}>
              <Button>
                  <span>Highest&nbsp;Price&nbsp;</span>
                  <span>💎</span>
              </Button>
            </a>
            <a href="#sortByNameAsc"onClick={this.sortByNameAsc}>
              <Button>
                  <span>Name&nbsp;A→Z&nbsp;</span>
                  <span>🔠</span>
              </Button>
            </a>

{/*            <a href="#sortOnlyBundles"onClick={this.sortOnlyBundles}>
              <Button>
                  <span>Only&nbsp;Bundles&nbsp;</span>
                  <span>🚥</span>
              </Button>
            </a>*/}

        </div>

        {/* BODY component, content sorted by HEADER */}
        <section>
         <ul className="App-body">
          {items}
         </ul>
        </section>

      </div>
    );
  }
}

export default Fish;
