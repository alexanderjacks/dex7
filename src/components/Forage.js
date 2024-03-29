import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SeasonTile from './SeasonTile.js';
import SeasonText from './SeasonText.js';
import Button from '@material-ui/core/Button';
import PopupTile from './PopupTile.js';
import '../App.css';

class Forage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    this.sortForageByPriceAsc = this.sortForageByPriceAsc.bind(this);
    this.sortForageByPriceDesc = this.sortForageByPriceDesc.bind(this);
    this.sortForageByNameAsc = this.sortForageByNameAsc.bind(this);
    this.sortForageBySeason = this.sortForageBySeason.bind(this);
  }
  sortForageByPriceAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.BasePrice - b.BasePrice))
    });
    console.log("Sort Price Asc");
  }
  sortForageByPriceDesc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (b.BasePrice - a.BasePrice))
    });
    console.log("Sort Price Desc");
  }
  sortForageByNameAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Name.localeCompare(b.Name)))
    });
    console.log("Sort Name Asc");
  }
  sortForageBySeason() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Season[0].localeCompare(b.Season[0])))
    });
    console.log("Sort Season Asc");
  }
  componentWillMount() {
    console.log("Forage goods are too mysterious!");
    this.setState({categoricals: this.props.categoricals});
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="css3frame-card-padding text-shadow-white">
        <PopupTile
          Category={item.Category}
          Description={item.Description}
          Name={item.Name}
          AlsoType={item.AlsoType}
          Image={require('../img/'+item.Name.replace(/ /g, '_')+'.png')}
          Season={item.Season}
          Location={item.Location}
          Season2={item.Season2}
          Location2={item.Location2}
          Season3={item.Season3}
          Location3={item.Location3}
          SellPrice={item.BasePrice}
        />
      </li>
    );
    return (
      <div className="App">
        {/* buttons, tied to App constructor logic att */}
        <div className="App-header-ctrls">
            <a href="#sortForageByPrice_Asc" className="" onClick={this.sortForageByPriceAsc}>
              <Button className="firelink">
                  <span>Lowest&nbsp;Price&nbsp;</span>
                  <span>💰</span>
              </Button>
            </a>
            <a href="#sortForageByPriceDesc" className="" onClick={this.sortForageByPriceDesc}>
              <Button className="firelink">
                  <span>Highest&nbsp;Price&nbsp;</span>
                  <span>💎</span>
              </Button>
            </a>
            <a href="#sortForageByNameAsc" className="" onClick={this.sortForageByNameAsc}>
              <Button className="firelink">
                  <span>Name&nbsp;A→Z&nbsp;</span>
                  <span>🔠</span>
              </Button>
            </a>
            <a href="#sortForageBySeason" className="" onClick={this.sortForageBySeason}>
              <Button className="firelink">
                  <span>Season&nbsp;A→Z&nbsp;</span>
                  <span>🔠</span>
              </Button>
            </a>
        </div>

        {/* BODY component, content sorted by HEADER */}
        <section>
         <ul className="App-body rowed">
          {items}
         </ul>
        </section>

      </div>
    );
  }
}

export default Forage;
