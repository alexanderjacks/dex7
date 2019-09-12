import React, { Component } from 'react';
import NavMenu from './NavMenu.js';
import Button from '@material-ui/core/Button';
import logo from '../img/logo.png';

class Header extends Component {
	render(){
	return (
	<header className="App-header rowed">
        <div className="coled">
            <img src={logo} className="App-logo pulse" alt="logo" />
        </div>
        <div>
        	<NavMenu/>
        </div>
		<div className="coled">
			<h3>
			Your Guide to Pelican Town
			</h3>
			<h4>
			Open Settings Menu (⠇) & Add To Your Home Screen
			</h4>
		</div>
	</header>
	);}
}
export default Header;