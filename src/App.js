import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import Seasongrid from './components/Seasongrid.js';

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
    this.sortBySeasonAsc = this.sortBySeasonAsc.bind(this);
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
  sortBySeasonAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Season.localeCompare(b.Season)))
    });
    console.log("Sort Season Asc");
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


      {/* CSS class assigns background img based on .Location prop */}
        <div className={item.Location.replace(/ /g, '_')+ " coled"}>
        <div className="css3frame-card-back">
        <div className="css3frame-card-padding">
          <div className="rowed row-spacer">
            {/* display image on left */}
            <img src={require('./img/'+item.Name.replace(/ /g, '_')+'.png')} 
            className="item-border" 
            alt={item.Name}
            />
            {/* display metadata on right */}
            <span className="coled">
              <h4 class="text-shadow-white">{item.Location}</h4>

              <h4 class="text-shadow-white">{item.Season}</h4>
              <Seasongrid seasons={item.Season} />
            </span>
          </div>
          <div className="rowed row-spacer">
              <h2>{item.Name}</h2>
              <span>
                <span>Forage</span>
                {/* if 2nd type exists */}
                {item.AlsoType && <span>(& {item.AlsoType})</span>}
              </span>
          </div>

        {/* prices across 4 quality lvls; needs own component */}
          <hr/>
          <h4 className="prices_bar"> 
            <h3>{item.BasePrice}g </h3>
            <span>
              <img src={require('./img/star-silver.png')} /> <span>{Math.ceil(item.BasePrice*1.25)}g </span>
            </span>
            <span>
              <img src={require('./img/star-gold.png')} /> <span>{Math.ceil(item.BasePrice*1.5)}g </span>
            </span>
            <span>
              <img src={require('./img/star-iridium.png')} /> <span>{Math.ceil(item.BasePrice*2)}g </span>
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
            <a href="#sortBySeasonAsc" className="" onClick={this.sortBySeasonAsc}>
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