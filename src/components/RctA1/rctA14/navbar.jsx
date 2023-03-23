import React, { Component } from "react";
class Navbar extends Component {
	render() {
		let { count, qty } = this.props;
		return (
			<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
				<a class="navbar-brand" href="#">
					MySystem
				</a>

				<div class="" id="navbarNav">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link" href="#">
								Products
								<span className="badge badge-pill badge-secondary">
									{count}
								</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Quantity
                <span className="badge badge-pill badge-secondary">
									{qty}
								</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default Navbar;
