import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BundleIterator from './BundleIterator.js';
import PopupTile from './PopupTile.js';

import '../App.css';

class Crops extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    this.sortByTimeAsc = this.sortByTimeAsc.bind(this);
    this.sortByTimeDesc = this.sortByTimeDesc.bind(this);

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
  sortByTimeAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Days - b.Days))
    });
    console.log("Sort Time Asc");
  }
  sortByTimeDesc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (b.Days - a.Days))
    });
    console.log("Sort Time Desc");
  }


  componentWillMount() {
    console.log("Artisan Valley => +100% more crop types; look into it!");
    this.setState({categoricals: this.props.categoricals});
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="css3frame-card-padding text-shadow-white">
      <PopupTile
        Category={item.Category}
        Name={item.Name}
        Image={require('../img/'+item.Name.replace(/ /g, '_')+'.png')}
        Season={item.Season}
        Location={item.Location}
        Location2={item.Location2}
        SellPrice={item.BasePrice}
        Bundle={item.Bundle}
        Days={item.Days}
        Notes={item.Notes}
        Description={item.Description}
        Continuous={item.Continuous}
        requirements={item.requirements}
      />
      </li>
    );

    return (
      <div className="App">

        {/* buttons, tied to App constructor logic att */}
        <div className="App-header-ctrls">
            <a href="#sortByPriceAsc" onClick={this.sortByPriceAsc}>
            <Button>
            	<span>Low Sell Price&nbsp;</span>
                <span>💰</span>
            </Button></a>
            <a href="#Price_Descending"onClick={this.sortByPriceDesc}>
              <Button>
                  <span>High Sell Price&nbsp;</span>
                  <span>💎</span>
              </Button>
            </a>
            <a href="#Time_Ascending"onClick={this.sortByTimeAsc}>
              <Button>
                  <span>Short Grow Time&nbsp;</span>
                  <span>🥕</span>
              </Button>
            </a>
            <a href="#Time_Descending"onClick={this.sortByTimeDesc}>
              <Button>
                  <span>Long Grow Time&nbsp;</span>
                  <span>🌽</span>
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

export default Crops;
