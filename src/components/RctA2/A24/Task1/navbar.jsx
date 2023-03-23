import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

class NavBar extends Component {
	state = {};
	render() {
		const {searchStr} = this.props;
		const quearyParams = queryString.parse(this.props.location.search);
		const {genre}= this.props.match.params;

		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<Link to="/" className="navbar-brand mx-1">
					BookSite
				</Link>
				<div className="">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={`/books/${genre ? genre: ""}?${quearyParams.newarrival? "": "newarrival=yes"}&${searchStr}`} className="nav-link">
								New Arrivals
							</Link>
						</li>
						<li className="nav-item">
							<Link to={`/books/children?${searchStr}`} className="nav-link">
								Children
							</Link>
						</li>
						<li className="nav-item">
							<Link to={`/books/fiction?${searchStr}`} className="nav-link">
								Fiction
							</Link>
						</li>
						<li className="nav-item">
							<Link to={`/books/mystery?${searchStr}`} className="nav-link">
								Mystery
							</Link>
						</li>
						<li className="nav-item">
							<Link to={`/books/management?${searchStr}`} className="nav-link">
								Management
							</Link>
						</li>
						<li className="nav-item">
							<Link to={`/books?${searchStr}`} className="nav-link">
								All Books
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/book/new" className="nav-link">
								New Books
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default NavBar;
