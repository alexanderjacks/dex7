import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SeasonImages from './SeasonImages.js';
import WeatherImages from './WeatherImages.js';
import PopupTile from './PopupTile.js';
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

  componentWillMount() {
    console.log("Minerals need more recipes!");
    this.setState({categoricals: this.props.categoricals});
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="css3frame-card-padding text-shadow-white">
        <PopupTile
          Name={item.Name}
          Image={require('../img/'+item.Name.replace(/ /g, '_')+'.png')}
          Season={item.Season}
          Location={item.Location}
          Time={item.Time}
          Notes={item.Description}
          Behaviour={item.Behaviour}
          ChallengeScore={item.ChallengeScore}
          Weather={item.Weather}
          SellPrice={item.BasePrice}
          Bundle={item.Bundle}
          Ins={item.Uses}
        />
      </li>
    );

    return (
      <div className="App">
        <div className="App-header-ctrls">
        {/* buttons, tied to App constructor logic att */}
            <a href="#Price_Ascending"onClick={this.sortByPriceAsc}>
              <Button className="firelink">
                  <span>Lowest&nbsp;Price&nbsp;</span>
                  <span>💰</span>
              </Button>
            </a>
            <a href="#Price_Descending"onClick={this.sortByPriceDesc}>
              <Button className="firelink">
                  <span>Highest&nbsp;Price&nbsp;</span>
                  <span>💎</span>
              </Button>
            </a>
            <a href="#sortByNameAsc"onClick={this.sortByNameAsc}>
              <Button className="firelink">
                  <span>Name&nbsp;A→Z&nbsp;</span>
                  <span>🔠</span>
              </Button>
            </a>
        </div>

        <section>
        {/* BODY component, content sorted by HEADER */}
         <ul className="App-body rowed">
          {items}
         </ul>
        </section>
        </div>
    );
  }
}

export default Fish;
