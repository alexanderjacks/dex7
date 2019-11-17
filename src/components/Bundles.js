import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BundleIterator from './BundleIterator.js';
import PopupTile from './PopupTile.js';
import '../App.css';

class Bundles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortByRoomAsc = this.sortByRoomAsc.bind(this);
  }

  sortByNameAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Name.localeCompare(b.Name)))
    });
    console.log("Sort Name Asc");
  }
  sortByRoomAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Room.localeCompare(b.Room)))
    });
    console.log("Sort Room Asc");
  }
  componentWillMount() {
    console.log("some players never complete bundles ;_;");
    this.setState({categoricals: this.props.categoricals});
  }

  render(){
    const items = this.state.categoricals.map((item, key ) =>
      <li key={item.Key} className="">

      {/* CSS class assigns background img based on .Name prop */}
        <div>
    	{/* converts json field so matches filenames,
    	removes any quantity from image name */}
        <div className={item.Image.replace(/ /g, '_').split('_(')[0]+ " coled no-repeat-bg"}>
        <div className="css3frame-card-back-sidefade categorical rowed row-spacer">
        <div className="css3frame-card-padding">
          {/* name & reward metadata */}
          <div className="rowed row-spacer">
            <h4 className="text-shadow-white">
              <h2>{item.Name}</h2>
              <h3>{item.Reward}</h3>
            </h4>
          </div>

          {/* all bundle ingredients */}
            <div className="text-shadow-white">
              <BundleIterator requirements={item.Ingredients} />
	            <h5>Needs {item.Needs} of {item.Of}</h5>
            </div>
          {/* CommCenter room metadata */}
          <div className="rowed row-spacer">
            <h4 className="text-shadow-white">
              <span>{item.Room}</span>
            </h4>
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
            <a href="#Name_Ascending" onClick={this.sortByNameAsc}>
              <Button>
              	<span>Name&nbsp;A→Z&nbsp;</span>
                <span>🔠</span>
              </Button>
            </a>
            <a href="#Room_Ascending" onClick={this.sortByRoomAsc}>
              <Button>
                <span>Room&nbsp;A→Z&nbsp;</span>
                <span>🔠</span>
              </Button>
            </a>
            {/*<a href="#Name_Ascending" onClick={this.sortByNameAsc}>
              <Button>
                🔠 sort by name
              </Button>
            </a>*/}
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

export default Bundles;
