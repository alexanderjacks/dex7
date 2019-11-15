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
    this.sortByEnergyDesc = this.sortByEnergyDesc.bind(this);
    this.sortByHealthDesc = this.sortByHealthDesc.bind(this);
  }
  sortByEnergyDesc() {
    this.setState(prevState => {
        this.state.categoricals.sort((b,a) => (a.GivesEnergy - b.GivesEnergy))
    });
    console.log("Sort by Energy Desc");
  }
  sortByHealthDesc() {
    this.setState(prevState => {
        this.state.categoricals.sort((b,a) => (a.GivesHealth - b.GivesHealth))
    });
    console.log("Sort by Health Desc");
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
      <li key={item.Key} className="rowed css3frame-card-padding text-shadow-white">
         {/* needs own component from here on down, fields will reflect json types */}
      {/* CSS class assigns background img based on .Name prop */}
    	{/* converts json field so matches filenames */}
        <div className={item.Name.replace(/ /g, '_').replace(/'/g, '%27')+ " categorical"}>
        <div className="css3frame-card-back">
          <div className="rowed">

            {/* name & price metadata */}
            <div>
	            <img src={require('../img/'+item.Name.replace(/ /g, '_')+'.png')}
	            className="item-border"
	            alt={item.Name}
	            />
	            <h2>{item.Name}</h2>
              <h3 className="coled">Sells for: {item.SellPrice}g</h3>
            </div>

            <div>
              <div className="coled">
    	          <h3>+{item.GivesEnergy} Energy</h3>
    	          <h3>+{item.GivesHealth} Health</h3>
              </div>
              { item.Buff1 &&
              <div className="coled">
                <h3>Buff: {item.Buff1}</h3>
                { item.Buff2 && <h3>Buff #2: {item.Buff2}</h3> }
                { item.Buff3 && <h3>Buff #3: {item.Buff3}</h3> }
                { item.Buff4 && <h3>Buff #4: {item.Buff4}</h3> }
              </div>
              }
            </div>

            <div className="max200px">
              <h3 className="">"{item.Description}"</h3>
              <h4>via: {item.Source1}
              {/* Only Queen of Sauce recipes have these props */}
              {item.TV_Year && <span>&nbsp;{item.TV_Year}</span> }
              {item.Episode_Number && <h5>(Episode #{item.Episode_Number})</h5> }
              {/* We only want the heart to appear after NPCs,
                  so NOT entries starting w "The ".
                  This may count as the most Pythonic ES6 I've yet written :|
               */}
              { !(item.Source1.charAt(0)==("T")) ? <span alt="poker-heart-emoji">♥</span> : <span></span>}
              </h4>
            </div>
          </div>

          {/*needs own component*/}
          <div className="">
	          <h3>Ingredients</h3>
            <div className="rowed">
              {item.Ing1 &&
                <div>
                  <div className="coled">
                    <img src={require('../img/'+item.Ing1.replace(/ /g, '_')+'.png')}
                      className="item-border"
                      alt={item.Ing1}
                    />
                    <span> {item.Ing1}</span>
                  </div>
                </div>
              }
              {item.Ing2 &&
                <div className="">
                  <div className="coled">
                    <img src={require('../img/'+item.Ing2.replace(/ /g, '_')+'.png')}
                      className="item-border"
                      alt={item.Ing2}
                    />
                    <span> {item.Ing2}</span>
                  </div>
                </div>
              }
              {item.Ing3 &&
                <div className="">
                  <div className="coled">
                    <img src={require('../img/'+item.Ing3.replace(/ /g, '_')+'.png')}
                      className="item-border"
                      alt={item.Ing3}
                    />
                    <span> {item.Ing3}</span>
                  </div>
                </div>
              }
              {item.Ing4 &&
                <div className="">
                  <div className="coled">
                    <img src={require('../img/'+item.Ing4.replace(/ /g, '_')+'.png')}
                      className="item-border"
                      alt={item.Ing4}
                    />
                    <span> {item.Ing4}</span>
                  </div>
                </div>
              }
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
                  <span alt="emoji-moneybag">💰</span>
              </Button>
            </a>
            <a href="#sortByPriceDesc"onClick={this.sortByPriceDesc}>
              <Button>
                  <span>High Sell Price&nbsp;</span>
                  <span alt="emoji-diamond">💎</span>
              </Button>
            </a>
            <a href="#sortByEnergyDesc" onClick={this.sortByEnergyDesc}>
              <Button>
              	<span>Energy+&nbsp;</span>
                <span alt="emoji-chart-w-upwards-trend">📈</span>
              </Button>
            </a>
            <a href="#sortByHealthDesc" onClick={this.sortByHealthDesc}>
              <Button>
                  <span>Health+&nbsp;</span>
                  <span alt="emoji-hospital">🏥</span>
              </Button>
            </a>
            {/*
            <a href="#sortEpisodeAsc" onClick={this.sortEpisodeAsc}>
              <Button>
              	<span>Queen of Sauce, Start to Finish &nbsp;</span>
                  <span alt="emoji-tv">📺</span>
              </Button>
            </a>
            */}
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
