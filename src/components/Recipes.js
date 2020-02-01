import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BundleIterator from './BundleIterator.js';
import PopupTile from './PopupTile.js';
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
        <PopupTile
          Name={item.Name}
          Description={item.Description}
          Image={require('../img/'+item.Name.replace(/ /g, '_')+'.png')}
          SellPrice={item.SellPrice}
          GivesEnergy={item.GivesEnergy}
          GivesHealth={item.GivesHealth}
          Buff1={item.Buff1}
          Buff2={item.Buff2}
          Buff3={item.Buff3}
          Buff4={item.Buff4}
          Ing1={item.Ing1}
          Ing2={item.Ing2}
          Ing3={item.Ing3}
          Ing4={item.Ing4}
          Source1={item.Source1}
          TV_Year={item.TV_Year}
          Episode_Number={item.Episode_Number}
          Source1={item.Source1}
        />
      </li>
    );

    return (
      <div className="App">

        {/* buttons, tied to App constructor logic att */}
        <div className="App-header-ctrls">
            <a href="#sortByPriceAsc" onClick={this.sortByPriceAsc}>
              <Button className="firelink">
              	<span>Low Sell Price&nbsp;</span>
                  <span alt="emoji-moneybag">💰</span>
              </Button>
            </a>
            <a href="#sortByPriceDesc"onClick={this.sortByPriceDesc}>
              <Button className="firelink">
                  <span>High Sell Price&nbsp;</span>
                  <span alt="emoji-diamond">💎</span>
              </Button>
            </a>
            <a href="#sortByEnergyDesc" onClick={this.sortByEnergyDesc}>
              <Button className="firelink">
              	<span>Energy+&nbsp;</span>
                <span alt="emoji-chart-w-upwards-trend">📈</span>
              </Button>
            </a>
            <a href="#sortByHealthDesc" onClick={this.sortByHealthDesc}>
              <Button className="firelink">
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
