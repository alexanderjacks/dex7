import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CropStages from './CropStages.js';

import '../App.css';

class Crops extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    // this.sortByNameAsc = this.sortByNameAsc.bind(this);
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
  // sortByNameAsc() {
  //   this.setState(prevState => {
  //       this.state.categoricals.sort((a,b) => (a.Name.localeCompare(b.Name)))
  //   });
  //   console.log("Sort Name Asc");
  // }
  componentWillMount() {      
    console.log("ConcernedApe we want more crop types!! Well, I do.");
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


      {/* CSS class assigns background img based on .Name prop */}
        <div>
    	{/* converts json field so matches filenames,
    	removes any quantity from image name */}
        <div className={item.Name.replace(/ /g, '_').split('_(')[0]+ " coled no-repeat-bg"}>
        <div className="css3frame-card-back">
        <div className="css3frame-card-padding">

          {/* name & price metadata */}
          <div className="rowed row-spacer">
            {/* display image on left */}
            <div>
	            <img src={require('../img/'+item.Name.replace(/ /g, '_')+'.png')} 
	            className="item-border" 
	            alt={item.Name}
	            />
	            <h4 class="text-shadow-white">
	              <h2>{item.Name}</h2>
	            </h4>
            </div>
            <div>
               <h3>{item.Season[0]}</h3>
	             <h3>{item.Type}</h3>
               <h5>takes {item.Days} days</h5>
               <h5>{item.Continuous} multi harvest</h5>
            </div>
          </div>

            <div class="rowed">
              <h6>crop stages...</h6>
              <CropStages stages={item.Stages} name={item.Name} />
            </div>
            <hr/>
          
          <div className="coled text-shadow-white">
	          <h3>Seed/buy: {item.SeedPrice}g</h3>
	          <h3>Crop/sell: {item.BasePrice}g</h3>
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
            <a href="#Price_Descending"onClick={this.sortByPriceDesc}>
              <Button>
                  <span>High Sell Price&nbsp;</span>
                  <span>💎</span>
              </Button>
            </a>
            <Button>
            	broken ~ 🌸 sort by season
            </Button>
            <Button>
            	broken ~ 🎁 sort by bundles
            </Button>
            <Button>
            	broken ~ 🍉 sort by harvest time
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

export default Crops;