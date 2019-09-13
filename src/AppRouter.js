import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import forage from './forage.json';
import Forage from './components/Forage';
import bundles from './bundles.json';
import Bundles from './components/Bundles';

function Index() {
  return <h2>Home</h2>;
}


class AppRouter extends React.Component {
	constructor(props){
      super(props)
      this.state = {
        categoricals: forage,
        forage: forage,
        bundles: bundles
      }
  	}
  
	render() {
	  return (
	    <Router>
	      <div>
	        <nav>
	          <ul>
	            <li>
	              <Link to="/">Home</Link>
	            </li>
	            <li>
	              <Link to="/forage/">Forage</Link>
	            </li>
	            <li>
	              <Link to="/bundles/">Bundles</Link>
	            </li>
	          </ul>
	        </nav>

	        <Route path="/" exact component={Index} />
	        <Route path="/forage/" component={Forage} categoricals={this.state.forage} />
	        <Route path="/bundles/" component={Bundles} categoricals={this.state.bundles} />
	      </div>
	    </Router>
	  );
	}
}

export default AppRouter;