import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SeasonTile from './SeasonTile.js';
import SeasonText from './SeasonText.js';
import Button from '@material-ui/core/Button';

import '../App.css';

class Forage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    this.sortForageByPriceAsc = this.sortForageByPriceAsc.bind(this);
    this.sortForageByPriceDesc = this.sortForageByPriceDesc.bind(this);
    this.sortForageByNameAsc = this.sortForageByNameAsc.bind(this);
    this.sortForageBySeason = this.sortForageBySeason.bind(this);
  }
  sortForageByPriceAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.BasePrice - b.BasePrice))
    });
    console.log("Sort Price Asc");
  }
  sortForageByPriceDesc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (b.BasePrice - a.BasePrice))
    });
    console.log("Sort Price Desc");
  }
  sortForageByNameAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Name.localeCompare(b.Name)))
    });
    console.log("Sort Name Asc");
  }
  sortForageBySeason() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Season[0].localeCompare(b.Season[0])))
    });
    console.log("Sort Season Asc");
  }
  componentWillMount() {
    console.log("Forage goods are too mysterious!");
    this.setState({categoricals: this.props.categoricals});
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className={item.Location.replace(/ /g, '_')+ " rowed css3frame-card-padding text-shadow-white"}>
         {/* needs own component from here on down, fields will reflect json types */}
      {/* CSS class assigns background img based on .Location prop */}
        <div className={item.Location.replace(/ /g, '_')}>
        <div className="css3frame-card-back categorical rowed row-spacer">
          {/* place and time metadata in text */}
              <div>
                <SeasonTile seasons={item.Season} />
                <h5>{item.Season}</h5>
              </div>
              <h5>{item.Location}</h5>
              {item.Location2 && <h5>& {item.Location2}</h5>}
              <img src={require('../img/'+item.Name.replace(/ /g, '_')+'.png')}
                className="item-border"
                alt={item.Name}
              />
            <div>
              <h2>{item.Name}</h2>
              {/* prices across 4 quality lvls; needs own component */}
              <h4 className="prices_bar">
              {item.BasePrice}g
              <span>
                <img src={require('../img/star-silver.png')} /> <span>{Math.ceil(item.BasePrice*1.25)}g </span>
              </span>
              <span>
                <img src={require('../img/star-gold.png')} /> <span>{Math.ceil(item.BasePrice*1.5)}g </span>
              </span>
              <span>
                <img src={require('../img/star-iridium.png')} /> <span>{Math.ceil(item.BasePrice*2)}g </span>
              </span>
              </h4>
            </div>
          <h3>
            Forage
            {/* if 2nd type exists */}
            {item.AlsoType && ` (& ${item.AlsoType})`}
          </h3>
          {/* Quests are dummied in w Ppl icons, b/c no game images exist; still crashing out on undefined Use values */}
          <div className="coled">
            {item.Bundle &&
              <span>
              <img src={require('../img/'+item.Bundle.replace(/ /g, '_')+'.png')}
                className="item-border"
                alt={item.Bundle}
              />
              <h4>{
                item.Bundle
              }</h4>
              </span>
             }
          </div>
          </div>
        </div>
      </li>
    );
    return (
      <div className="App">
        {/* buttons, tied to App constructor logic att */}
        <div className="App-header-ctrls">
            <a href="#sortForageByPrice_Asc" className="" onClick={this.sortForageByPriceAsc}>
              <Button>
                  <span>Lowest&nbsp;Price&nbsp;</span>
                  <span>💰</span>
              </Button>
            </a>
            <a href="#sortForageByPriceDesc" className="" onClick={this.sortForageByPriceDesc}>
              <Button>
                  <span>Highest&nbsp;Price&nbsp;</span>
                  <span>💎</span>
              </Button>
            </a>
            <a href="#sortForageByNameAsc" className="" onClick={this.sortForageByNameAsc}>
              <Button>
                  <span>Name&nbsp;A→Z&nbsp;</span>
                  <span>🔠</span>
              </Button>
            </a>
            <a href="#sortForageBySeason" className="" onClick={this.sortForageBySeason}>
              <Button>
                  <span>Season&nbsp;A→Z&nbsp;</span>
                  <span>🔠</span>
              </Button>
            </a>
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

export default Forage;
