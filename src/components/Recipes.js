import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BundleIterator from './BundleIterator.js';

import '../App.css';

class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
  }
  sortByPriceAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.SellPrice - b.SellPrice))
    });
    console.log("Sort Price Asc");
  }
  sortByPriceDesc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (b.SellPrice - a.SellPrice))
    });
    console.log("Sort Price Desc");
  }

  componentWillMount() {
    console.log("Heyo Recipes = Cooking");
    this.setState({categoricals: this.props.categoricals});
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="categorical">
         {/* needs own component from here on down, fields will reflect json types */}
        <div className="css3frame-border-4">
        <div className="css3frame-border-3">
        <div className="css3frame-border-2">
        <div className="css3frame-border-1">


        <div className="rowed row-spacer row-spillover">
      {/* CSS class assigns background img based on .Name prop */}
    	{/* converts json field so matches filenames */}
        <div className="">
        <div className="css3frame-card-back">
        <div className="css3frame-card-padding">
          {/* name & price metadata */}
          <div className="rowed row-spacer">
            {/* display image on left */}
            <div>
	            <img src={require('../img/'+item.Name.replace(/ /g, '_').replace(/'/g, '%27')+'.png')}
	            className="item-border"
	            alt={item.Name}
	            />
	            <h2 className="text-shadow-white">
	              {item.Name}
	            </h2>
            </div>
            <div>
              <h3>{item.Description}</h3>
              <h3>from: {item.Source1}<span alt="poker-heart-emoji">♥</span></h3>
            </div>
          </div>
          <hr/>
          <div className="coled text-shadow-white">
	          <h3>Energy Restore: {item.GivesEnergy}</h3>
	          <h3>Health Restore: {item.GivesHealth}</h3>
            <h3>{item.SellPrice}g</h3>
          </div>
          <hr/>
          <div className="coled">
	          <h3>Ingredients</h3>
            <h4>
              {item.Ing1 && <span>{item.Ing1}</span> }
              {item.Ing2 && <span> + {item.Ing2}</span> }
              {item.Ing3 && <span> + {item.Ing3}</span> }
              {item.Ing4 && <span> + {item.Ing4}</span> }
            </h4>
          </div>

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
            <a href="#sortByPriceAsc" onClick={this.sortByPriceAsc}>
            <Button>
            	<span>Low Sell Price&nbsp;</span>
                <span>💰</span>
            </Button></a>
            <a href="#sortByPriceDesc"onClick={this.sortByPriceDesc}>
              <Button>
                  <span>High Sell Price&nbsp;</span>
                  <span>💎</span>
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

export default Recipes;
