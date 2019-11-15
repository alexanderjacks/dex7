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
        <div className="css3frame-border-4">
        <div className="css3frame-border-3">
        <div className="css3frame-border-2">
        <div className="css3frame-border-1">

        <div className="no-repeat-bg css3frame-card-back-sidefade">

          <div className="text-shadow-white rowed">
          {/* name & bday metadata */}
          <img src={require('../img/'+person.Villager.replace(/ /g, '_')+'.png')}
            className="item-border"
            alt={person.Villager}
          />
          <h4 className="text-shadow-white">
            <h2>{person.Villager}</h2>
            {person.Birthday}
          </h4>
          <ul>
          {/* all gift tastes */}
            <GiftIterator
              gifts={person.Loves}
              title="Loves"
              bgcolor="firebrick"
            />
            <GiftIterator
              gifts={person.Likes}
              title="Likes"
              bgcolor="chocolate"
            />
            {
            person.Neutral &&
            <GiftIterator
              gifts={person.Neutral}
              title="Neutral"
              bgcolor="whitesmoke"
            />
            }
            {
            person.Dislikes &&
            <GiftIterator
              gifts={person.Dislikes}
              title="Dislikes"
              bgcolor="slateblue"
            />
            }
            {
            person.Hates &&
            <GiftIterator
              gifts={person.Hates}
              title="Hates"
              bgcolor="darkslategrey"
            />
            }
            </ul>
          </div>

        </div>
        </div>
        </div>
        {/* styling of item frame */}
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
