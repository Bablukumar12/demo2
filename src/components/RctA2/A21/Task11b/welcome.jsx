import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<h4>Welcome : Choose your course</h4>
				<Link to="/course/React">React</Link> <br />
				<Link to="/course/Angular">Angular</Link><br />
				<Link to="/course/Javascipt">Javascipt</Link><br />
			</div>
		);
	}
}
export default Welcome;
