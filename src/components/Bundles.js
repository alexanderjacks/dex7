import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Seasontext from './Seasontext.js';

import bundles from '../bundles.json';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: bundles,
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
  componentDidMount() {      
    console.log("some players never complete bundles ;_;");
    console.log(this.state.categoricals);
  }

  commaFormatting(num) {
  	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="categorical">
         {/* needs own component from here on down, fields will reflect json types */}
        <div className="css3frame-border-4">
        <div className="css3frame-border-3">
        <div className="css3frame-border-2">
        <div className="css3frame-border-1">


      {/* CSS class assigns background img based on .Name prop */}
        <div className={item.Image.replace(/ /g, '_')+ " coled no-repeat-bg"}>
        <div className="css3frame-card-back">
        <div className="css3frame-card-padding">
          {/* place and time metadata in text */}
          <div className="rowed row-spacer">
            <h4 class="text-shadow-white">
              <h2>{item.Name}</h2>
              <h3>{item.Reward}</h3>
              <span>{item.Room}</span>
              <span>
	              <span>Needs {item.Needs} of</span>
	              <span> {item.Of}</span>
              </span>
            </h4>
          </div>

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

export default App;