import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand mx-1">
					Mobiles
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/mobiles" className="nav-link">
								All Brands
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/mobiles/Xiaomi" className="nav-link">
								Xiaomi
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/mobiles/Samsung" className="nav-link">
								Samsung
							</Link>
						</li>
                        <li className="nav-item">
							<Link to="/mobiles/Realme" className="nav-link">
								Realme
							</Link>
						</li>
                        <li className="nav-item">
							<Link to="/mobiles/Oppo" className="nav-link">
								Oppo
							</Link>
						</li>
                        
						
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
