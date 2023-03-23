import React, { Component } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-danger bg-danger">
				<Link to="/" className="navbar-brand mx-1">
					NewsSite
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link text-white" onClick={()=>this.props.onQ("sports")}>
								Sports
							</a>
						</li>
						<li className="nav-item">
							<a  className="nav-link text-white" onClick={()=>this.props.onQ("cricket")}>
								Cricket
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" onClick={()=>this.props.onQ("movies")}>
								Movies
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" onClick={()=>this.props.onQ("education")}>
								Education
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
