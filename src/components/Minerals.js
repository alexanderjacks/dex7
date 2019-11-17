import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PopupTile from './PopupTile.js';
import '../App.css';

class Minerals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortByTypeAsc = this.sortByTypeAsc.bind(this);
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
  sortByTypeAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Type.localeCompare(b.Type)))
    });
    console.log("Sort Type Asc");
  }

  componentWillMount() {
    console.log("Minerals need more recipes!");
    this.setState({categoricals: this.props.categoricals});
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="rowed css3frame-card-padding text-shadow-white">
        <PopupTile
          Name={item.Name}
          Description={item.Description}
          Image={require('../img/'+item.Name.replace(/ /g, '_')+'.png')}
          SellPrice={item.BasePrice}
          Type={item.Type}
          Mine_Lvl={item.Mine_Lvl}
          Panning={item.Panning}
          Uses={item.Uses}
        />
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
                  <span>Name&nbsp;A→Z&nbsp;</span>
                  <span>🔠</span>
              </Button>
            </a>
            <a href="#sortByTypeAsc" className="" onClick={this.sortByTypeAsc}>
              <Button>
                  <span>Type&nbsp;A→Z&nbsp;</span>
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
export default Minerals;
