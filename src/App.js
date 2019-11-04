import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AdSense from 'react-adsense';
import NavMenu from './components/NavMenu.js';
import Button from '@material-ui/core/Button';
import logo from './img/logo.png';
import './App.css';
import full from './full.json';
import Forage from './components/Forage.js';
import Crops from './components/Crops.js';
import Minerals from './components/Minerals.js';
import Fish from './components/Fish.js';
import Bundles from './components/Bundles.js';
const forage = full.filter(thing => thing.Category == 'forage');
const crops = full.filter(thing => thing.Category == 'crop');
const bundles = full.filter(thing => thing.Category == 'bundle');
const fish = full.filter(thing => thing.Category == 'fish');
const minerals = full.filter(thing => thing.Category == 'mineral');
const url_ = '..'
const url1 = '../forage'
const url2 = '../crops'
const url3 = '../minerals'
const url4 = '../fish'
const url5 = '../cooking'
const url6 = '../crafting'
const url7 = '../artisan'
const url0 = '../bundles'

function Index() {
  return(
    <div className="homepage-route">
      <h1><span alt="exclamation-upside-down">¡</span>Stardewdex!</h1>
      <p>Your quick guide to Stardew Valley</p>
      <hr/>
      <AdSense.Google
          client='ca-pub-1699472970547311'
          slot='6359860180'
      />
      <hr/>
      <div className="coled">
        <Link to={url1} className="rowed">
          <img src={require('./img/Common_Mushroom.png')} />
          &nbsp;
          Forage
        </Link>
        <Link to={url2} className="rowed">
          <img src={require('./img/Melon.png')} />
          &nbsp;
          Crops
        </Link>
        <Link to={url3} className="rowed">
          <img src={require('./img/Jade.png')} />
          &nbsp;
          Minerals
        </Link>
        <Link to={url4} className="rowed">
          <img src={require('./img/Red_Snapper.png')} />
          &nbsp;
          Fish
        </Link>
        <Link to={url0} className="rowed">
          <img src={require('./img/Quality_Crops_Bundle.png')} />
          &nbsp;
          Bundles
        </Link>
      </div>
      <hr/>
      <p>Use the LISTS button to explore the site.</p>
      <div className="responsive-stuff">
        categorical
      </div>
      <h6>Most images copyright <a href="https://twitter.com/concernedape?lang=en" target="_blank" rel="noopener noreferrer">ConcernedApe</a>. Content available under <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike.</a></h6>
    </div>
  );
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      forage: forage,
      crops: crops,
      minerals: minerals,
      fish: fish,
      bundles: bundles,
    }
  }

  componentDidMount() {
    console.log("here's the app shell");
  }

  render(){
    return (
      <div className="App">

        <header className="App-header rowed row-spacer">
          <div className="coled">
            <Link to={url_}>
              <img src={logo} className="App-logo pulse" alt="logo" />
            </Link>
          </div>
          <div className="coled">
            <NavMenu/>
          </div>
          <div className="coled">
            <h3>Your Guide to Pelican Town</h3>
            <h4>Open Settings Menu (⠇) & Add To Your Home Screen</h4>
          </div>
        </header>

        {/* BODY components, active content chosen by <NavMenu/>  */}
        <section>
          <Route path="/" exact component={Index} />
          <Route path="/bundles/"
            render={props =>
            (<Bundles {...props}
              key={this.state.bundles[0]}
              categoricals={this.state.bundles} />)
            }
          />
          <Route path="/forage/"
            render={props =>
            (<Forage {...props}
              key={this.state.forage[0]}
              categoricals={this.state.forage} />)
            }
          />
          <Route path="/crops/"
            render={props =>
            (<Crops {...props}
              key={this.state.crops[0]}
              categoricals={this.state.crops} />)
            }
          />
          <Route path="/minerals/"
            render={props =>
            (<Minerals {...props}
              key={this.state.minerals[0]}
              categoricals={this.state.minerals} />)
            }
          />
          <Route path="/fish/"
            render={props =>
            (<Fish {...props}
              key={this.state.fish[0]}
              categoricals={this.state.fish} />)
            }
          />
        </section>

      </div>
    );
  }
}
export default App;
