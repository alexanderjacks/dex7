import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Seasongrid from './components/Seasongrid.js';
import Seasontext from './components/Seasontext.js';
import Button from '@material-ui/core/Button';

import logo from './img/logo.png';
import './App.css';

import forage from './forage.json';
import bundles from './bundles.json';
import Forage from './components/Forage.js';
import Bundles from './components/Bundles.js';



function Index() {
  return(<>
    <h2>Home Base</h2>
    <h6>Maybe Crops? They as-yet-uncrafted People component? Description of app?????
    </h6>
  </>);
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      forage: forage,
      bundles: bundles,
    }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortByWinter = this.sortByWinter.bind(this);
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
  sortByWinter() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Season.localeCompare(b.Season)))
    });
    console.log("Sort Season Asc");
  }
  
  componentDidMount() {      
    console.log("here's the app shell");
  }

  render(){
    return (
      <div className="App">
        
      <header className="App-header rowed">
        <div className="coled">
          <img src={logo} className="App-logo pulse" alt="logo" />
        </div>
        <div className="coled">
          {/*<NavMenu/>*/}
          {/*<AppRouter />*/}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/forage/">Forage</Link>
              </li>
              <li>
                <Link to="/bundles/">Bundles</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="coled">
          <h3>
            Your Guide to Pelican Town
          </h3>
          <h4>
            Open Settings Menu (⠇) & Add To Your Home Screen
          </h4>
        </div>
      </header>
        

        {/* BODY component, content chosen by dropdown Router ideally */}
        <section>
          {/*<Forage categoricals={this.state.forage} />*/}
          <Route path="/" exact component={Index} />
          <Route path="/bundles/"
            render={props =>
            (<Bundles {...props} categoricals={this.state.bundles}/>)
            }
          />
          <Route path="/forage/"
            render={props =>
            (<Forage {...props} categoricals={this.state.forage}/>)
            }
          />
        </section>

      </div>
    );
  }
}

export default App;