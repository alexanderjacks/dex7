import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import GiftIterator from './GiftIterator.js';

import '../App.css';

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoricals: this.props.categoricals,
    }
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortByBdayAsc = this.sortByBdayAsc.bind(this);
  }

  sortByNameAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Villager.localeCompare(b.Villager)))
    });
    console.log("Sort Name Asc");
  }
  sortByBdayAsc() {
    this.setState(prevState => {
        this.state.categoricals.sort((a,b) => (a.Birthday.localeCompare(b.Birthday)))
    });
    console.log("Sort by Bday? Asc");
  }
  componentWillMount() {
    console.log("love ≈ like * 2");
    this.setState({categoricals: this.props.categoricals});
  }

  render(){
    const persons = this.state.categoricals.map((person, key ) =>
      <li key={person.Key} className="categorical">
         {/* needs own component from here on down, fields will reflect json types */}
        <div className="css3frame-border-4 max400px">
        <div className="css3frame-border-3">
        <div className="css3frame-border-2">
        <div className="css3frame-border-1">


      {/* CSS class assigns background img based on .Name prop */}
        <div>
    	{/* converts json field so matches filenames,
    	removes any quantity from image name */}
        <div className={person.Villager.replace(/ /g, '_').split('_(')[0]+ " coled no-repeat-bg"}>
        <div className="css3frame-card-back-sidefade">
        <div className="css3frame-card-padding">
          {/* name & bday metadata */}
          <div className="rowed row-spacer">
            <img src={require('../img/'+person.Villager.replace(/ /g, '_')+'.png')}
              className="item-border"
              alt={person.Villager}
            />
            <h4 className="text-shadow-white">
              <h2>{person.Villager}</h2>
              {person.Birthday}
            </h4>
          </div>

          {/* all gift tastes */}
          <div className="text-shadow-white">
            <GiftIterator
              gifts={person.Loves}
              title="Loves"
              bgcolor="red"
            />
            <GiftIterator
              gifts={person.Likes}
              title="Likes"
              bgcolor="orange"
            />
            <GiftIterator
              gifts={person.Neutral}
              title="Neutral"
              bgcolor="whitesmoke"
            />
            <GiftIterator
              gifts={person.Dislikes}
              title="Dislikes"
              bgcolor="lime"
            />
            <GiftIterator
              gifts={person.Hates}
              title="Hates"
              bgcolor="darkgreen"
            />
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
            <a href="#Name_Ascending" onClick={this.sortByNameAsc}>
              <Button>
              	<span>Name&nbsp;A→Z&nbsp;</span>
                <span>🔠</span>
              </Button>
            </a>
            <a href="#Room_Ascending" onClick={this.sortByBdayAsc}>
              <Button>
                <span>Bday&nbsp;A→Z&nbsp;</span>
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
          {persons}
         </ul>
        </section>

      </div>
    );
  }
}

export default People;
