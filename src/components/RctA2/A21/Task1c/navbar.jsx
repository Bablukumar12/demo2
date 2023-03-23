import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	state = {};
	render() {
		const { brands } = this.props;
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand">
					LAPTOPS
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						{brands.map((brand) => (
							<li className="nav-item" key={brand}>
								<Link to={`/all/1?brand=${brand}`} className="nav-link">
									{brand}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
