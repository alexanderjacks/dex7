import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header.js';
import Seasongrid from './components/Seasongrid.js';
import Seasontext from './components/Seasontext.js';
import Button from '@material-ui/core/Button';

import Forage from './components/Forage';
import Bundles from './components/Bundles';
import './App.css';

class App extends Component {
  
  
  componentDidMount() {      
    console.log("here's the app shell");
  }

  render(){
    return (
      <div className="App">
        
        {/* HEADER component, includes sorting of BODY content */}
        <Header/>
        

        {/* BODY component, content sorted by HEADER ideally */}
        <section>
          <Bundles />
        </section>

      </div>
    );
  }
}

export default App;