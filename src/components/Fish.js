import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Seasongrid from './Seasongrid.js';
import Seasontext from './Seasontext.js';
import Button from '@material-ui/core/Button';

import '../App.css';

class Fish extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
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
  
  componentWillMount() {      
    console.log("Minerals need more recipes!");
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


      {/* elaborate background image decision code, for CSS class via .Location prop */}
        <div className={item.Location[0].replace(/ /g, '_')+ " coled"}>

        <div className="css3frame-card-back">
        <div className="css3frame-card-padding">
          {/* place and time metadata in text */}
          <div className="rowed row-spacer">
            {/* display image on left */}
			<span className="coled">
				<h2 className="text-shadow-white">{item.Name}</h2>
				<h3><ul>{item.Location.map && item.Location.map(Location => <li>{Location}</li>)}</ul></h3>
				<h3>{item.Time}</h3>
			</span>
            <span className="coled">
	            <img src={require('../img/'+item.Name.replace(/ /g, '_')+'.png')} 
	            className="item-border" 
	            alt={item.Name}
	            />
	            <h3>{item.BasePrice}g</h3>
            </span>
            {/* display metadata on right */}
          </div>
          <div className="rowed row-spacer">
            <h4 class="text-shadow-white">
              <hr/>
			  <h4>{item.Notes && item.Notes}</h4>
              <h5>{item.Description && 
              	<span>📕: {item.Description} </span>
              }</h5>
              <span>
              	{item.Uses && item.Uses.map(
              		(Use) => (<span>{Use}</span>)
              	)}
              </span>
            </h4>
          </div>

        </div>
        </div>

        {/* styling of item frame */}
        </div>
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
                  <span>Name&nbsp;A→Z&nbsp;</span>
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

export default Fish;