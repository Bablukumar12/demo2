import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand mx-1">
					Portal101
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/persons" className="nav-link">
								All Persons
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/addPerson" className="nav-link">
								Add Person
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
