import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

class NavBar extends Component {
	state = {};
	render() {
        const courses =["JS","React","Node","Angular"];
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand mx-1">
					StudentsPortal
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={`/students`} className="nav-link">
								Students
							</Link>
						</li>
						<li className="nav-item">
							<Link to={`/students/add`} className="nav-link">
								Add a Students
							</Link>
						</li>
						
                        <li className="nav-item dropdown">
							<a
								href=""
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown">
								Courses
							</a>
							<div className="dropdown-menu">
								{courses.map((n1) => (
									<Link key={n1} className="dropdown-item" to={`/students/course/${n1}`}>
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
