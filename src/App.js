import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SimpleMenu from './SimpleMenu.js';
import FilterSwitches from './FilterSwitches.js';
import stuff from './stuff.json';
import bundles from './bundles.json';
import './App.css';



import logo from './img/logo.png';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categoricals: stuff,
    }
  }
  
  componentDidMount() {      
    console.log("check out the hipster hand-made JSON goodness");
    console.log(bundles);
  }

  render(){

    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="categorical">
        <div className="itemm-border-4">
        <div className="itemm-border-3">
        <div className="itemm-border-2">
        <div className="itemm-border-1">
        <div className={item.When+ " coled"}>
        <div className="itemm-card-back">
        <div className="itemm-card-padding">
          <img src={require('./img/' + item.ImageSrc + '.png')} 
          className="item-border" 
          alt={item.Name}
          />
          <div className="rowed">
              <h2>{item.Name}</h2>
            <div className="coled">
              <h4>{item.When}</h4>
              <h4>{item.Type}</h4>
            </div>
          </div>
          <div className="lotta-text">{item.Description}</div>
          <h4>{item.SellPrice}</h4>
          <ul className="lotta-text navy">
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
        <header className="App-header rowed">
          <div className="coled">
            <img src={logo} className="App-logo pulse" alt="logo" />
            <SimpleMenu />
          </div>
          <div className="App-header-switchpanel">
            <FilterSwitches />
          </div>
          <div className="coled">
            <h2>
              Your Guide to Pelican Town
            </h2>
            <h3>
              Add To Home Screen!
            </h3>
          </div>
        </header>
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
