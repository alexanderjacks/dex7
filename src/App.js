import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

import Button from '@material-ui/core/Button';

import forage from './forage.json';
import bundles from './bundles.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: forage,
    }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortBySeasonDesc = this.sortBySeasonDesc.bind(this);
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
  sortBySeasonDesc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (b.Season.localeCompare(a.Season)))
    });
    console.log("Sort Season Desc");
  }
  componentDidMount() {      
    console.log("check out the hipster hand-made JSON goodness");
    console.log(this.state.categoricals);
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="categorical">
         {/* needs own component from here on down, fields will reflect json types */}
        <div className="css3frame-border-4">
        <div className="css3frame-border-3">
        <div className="css3frame-border-2">
        <div className="css3frame-border-1">
        <div className={item.Season+ " coled"}>
        <div className="css3frame-card-back">
        <div className="css3frame-card-padding">
          <img src={require('./img/'+item.Name.replace(/ /g, '_')+'.png')} 
          className="item-border" 
          alt={item.Name}
          />
          <div className="rowed">
              <h2>{item.Name}</h2>
            <div className="coled">
              <h4>{item.Season}</h4>
              <h4>{item.Location}</h4>
              <span>Forage</span>
              {/* if 2nd type exists */}
              {item.AlsoType && <span>(& {item.AlsoType})</span>}
            </div>
          </div>
{/*
          <div className="lotta-text">
            {item.Description}
          </div>
*/}
          <hr/>
          <h4 className="prices_bar"> {/* needs own component */}
            <h3>{item.BasePrice}g </h3>
            <span>
              <img src={require('./img/star-silver.png')} /> <span>{item.BasePrice*1.25}g </span>
            </span>
            <span>
              <img src={require('./img/star-gold.png')} /> <span>{item.BasePrice*1.5}g </span>
            </span>
            <span>
              <img src={require('./img/star-iridium.png')} /> <span>{item.BasePrice*2}g </span>
            </span>
          </h4>
          <ul className="lista-stuff navy">
            {item.UsedIn && <li>⓵ {item.UsedIn}</li>}
            {item.UsedIn2 && <li>⓶ {item.UsedIn2}</li>}
            {item.UsedIn3 && <li>⓷ {item.UsedIn3}</li>}
            {item.UsedIn4 && <li>⓸ {item.UsedIn4}</li>}
            {item.UsedIn5 && <li>⓹ {item.UsedIn5}</li>}
            {item.UsedIn6 && <li>⓺ {item.UsedIn6}</li>}
          </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </li>
    );

    return (
      <div className="App">
        
        {/* HEADER component, includes sorting of BODY content */}
        <Header/>
        {/* buttons, tied to App constructor logic att */}
        <div className="App-header-ctrls">
            <a href="#Price_Ascending" className="" onClick={this.sortByPriceAsc}>
              <Button>
                  <span>Lowest&nbsp;Price&nbsp;</span>
                  <span>💰</span>
              </Button>
            </a>
            <a href="#Price_Descending" className="" onClick={this.sortByPriceDesc}>
              <Button>
                  <span>Highest&nbsp;Price&nbsp;</span>
                  <span>💎</span>
              </Button>
            </a>
            <a href="#sortByNameAsc" className="" onClick={this.sortByNameAsc}>
              <Button>
                  <span>Name&nbsp;A->Z&nbsp;</span>
                  <span>🔠</span>
              </Button>
            </a>
            <a href="#sortBySeasonDesc" className="" onClick={this.sortBySeasonDesc}>
              <Button>
                  <span>Season&nbsp;</span>
                  <span>❄️</span>
              </Button>
            </a>
        </div>

        {/* BODY component, content sorted by HEADER */}
        <section >
         <ul className="App-body">
          {items}
         </ul>
        </section>

      </div>
    );
  }
}

export default App;