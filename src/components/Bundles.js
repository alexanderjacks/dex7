import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IngredientIterator from './IngredientIterator.js';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    // this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    // this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    // this.sortByNameAsc = this.sortByNameAsc.bind(this);
  }
  // sortByPriceAsc() {
  //   this.setState(prevState => {
  //       this.state.categoricals.sort((a,b) => (a.BasePrice - b.BasePrice))
  //   });
  //   console.log("Sort Price Asc");
  // }
  // sortByPriceDesc() {
  //   this.setState(prevState => {
  //       this.state.categoricals.sort((a,b) => (b.BasePrice - a.BasePrice))
  //   });
  //   console.log("Sort Price Desc");
  // }
  // sortByNameAsc() {
  //   this.setState(prevState => {
  //       this.state.categoricals.sort((a,b) => (a.Name.localeCompare(b.Name)))
  //   });
  //   console.log("Sort Name Asc");
  // }
  componentDidMount() {      
    console.log("some players never complete bundles ;_;");
    console.log(this.state.categoricals);
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
        <div>
    	{/* converts json field so matches filenames,
    	removes any quantity from image name */}
        <div className={item.Image.replace(/ /g, '_').split('_(')[0]+ " coled no-repeat-bg"}>
        <div className="css3frame-card-back">
        <div className="css3frame-card-padding">
          {/* name & reward metadata */}
          <div className="rowed row-spacer">
            <h4 class="text-shadow-white">
              <h2>{item.Name}</h2>
              <h3>{item.Reward}</h3>
            </h4>
          </div>

          {/* all bundle ingredients */}
            <div class="text-shadow-white">
              <IngredientIterator ingredients={item.Ingredients} />
	            <h5>Needs {item.Needs} of {item.Of}</h5>
            </div>
          {/* CommCenter room metadata */}
          <div className="rowed row-spacer">
            <h4 class="text-shadow-white">
              <hr/>
              <span>{item.Room}</span>
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
            <Button>
            	broken ~ sort by 6 rooms
            </Button>
            <Button>
            	broken (larger than usual dropdown) ~ sort by 30 rewards
            </Button>
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