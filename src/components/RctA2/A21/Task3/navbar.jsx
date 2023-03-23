import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand mx-1">
					JobSys
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/job/React" className="nav-link">
								React
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/job/Angular" className="nav-link">
								Angular
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/job/android" className="nav-link">
								Android
							</Link>
						</li>
						
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
