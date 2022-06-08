import React from "react";
import logo from '../img/logo.svg'
import DropDown from './DropDown'
import cart from '../img/cart.svg'

class Navbar extends React.Component {
	render() {
		return (
			<header>
				<nav className="container containerpall flex flex-sb flex-ai headerlinks">
					<div>
						<a href="#">WOMEN</a>
						<a href="#">MEN</a>
						<a href="#">KIDS</a>
						<a classN="headerlogo" href="#"></a>
					</div>
					<div className="box">
						<img src={logo} alt="shoplogo" srcset="" />
					</div>
					<div className="ra">
					<div>
						<DropDown />
					</div>
					<div>
					<img src={cart} alt="shopcart"  />
					</div></div>
				</nav>
			</header>
		);
	}
}
export default Navbar;