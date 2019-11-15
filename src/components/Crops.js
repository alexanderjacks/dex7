import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BundleIterator from './BundleIterator.js';

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
      <li key={item.Key} className="rowed css3frame-card-padding text-shadow-white">
      {/* CSS class assigns background img based on .Name prop */}
    	{/* converts json field so matches filenames */}
        <div className={item.Season[0].replace(/ /g, '_')+ " "}>
        <div className="css3frame-card-back-sidefade categorical rowed">
          {/* name & price metadata */}

            {/* display image on left */}

	            <img src={require('../img/'+item.Name.replace(/ /g, '_')+'.png')}
	            className="item-border"
	            alt={item.Name}
	            />
	            <h2 className="">
	              {item.Name}
	            </h2>

            <div>
               <h3>{item.Season[0]}</h3>
	             <h3>{item.Type}</h3>
               <h4>harvest: {item.Days} days</h4>
               <h4>{item.Continuous ? 'multi-harvest' : 'harvest once' }</h4>
            </div>

          <hr/>
          <div className="coled text-shadow-white">
	          <h3>Seed/buy: {item.SeedPrice}g</h3>
	          <h3>Crop/sell: {item.BasePrice}g</h3>
            <h3>from: {item.Location}</h3>
          </div>
          <BundleIterator requirements={item.Bundles} />
        </div>
        </div>
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
