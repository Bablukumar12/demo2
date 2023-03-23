import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand mx-1">
					JX Company
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/emps" className="nav-link">
								Employees
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/offices" className="nav-link">
								Offices
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/addEmp" className="nav-link">
								New Employee
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
