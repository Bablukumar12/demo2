import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

class NavBar extends Component {
	state = {};
	render() {
        let names=["George","Carla","Tim"];
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand mx-1">
					Component LifeCycle Example
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/compA" className="nav-link">
								AAAA
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a
								href=""
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown">
								BBBB
							</a>
							<div className="dropdown-menu">
								{names.map((n1) => (
									<Link key={n1} className="dropdown-item" to={`/compB/${n1}`}>
										{n1}
									</Link>
								))}
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
