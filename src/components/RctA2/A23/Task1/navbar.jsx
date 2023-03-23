import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand mx-1">
					MyPortal
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/products" className="nav-link">
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products/add" className="nav-link">
								Add Product
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
