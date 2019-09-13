import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Seasongrid from './components/Seasongrid.js';
import Seasontext from './components/Seasontext.js';
import Button from '@material-ui/core/Button';

import AppRouter from './AppRouter.js';
import NavMenu from './components/NavMenu.js';
import logo from './img/logo.png';
import './App.css';

import forage from './forage.json';
import Forage from './components/Forage';
import bundles from './bundles.json';
import Bundles from './components/Bundles';


function Index() {
  return <h2>Home Base</h2>;
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categoricals: forage,
    }
  }
  
  chooseForage() {
    this.setState(prevState => {
      this.state = { categoricals: forage }
    });
  }
  chooseBundles() {
    this.setState(prevState => {
      this.state = { categoricals: bundles }
    });
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
          <Forage categoricals={this.state.categoricals} />
          {/*<Bundles categoricals={this.state.bundles} />*/}
          {/*<Route path="/" exact component={Index} />
          <Route path="/forage/" component={Forage} categoricals={this.state.categoricals} />
          <Route path="/bundles/" component={Bundles} categoricals={this.state.categoricals} />*/}
        </section>

      </div>
    );
  }
}

export default App;