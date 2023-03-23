import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "./httpService";

class Details extends Component {
	state = { data: {} };
	async componentDidMount() {
		let { id } = this.props.match.params;
		let respons = await http.get(`/sporticons/details/${id}`);
		let { data } = respons;
		console.log(respons);
		this.setState({ data: data });
	}
	render() {
		let { data = {} } = this.state;
		let { country, name, id, sport, details = {} } = data;
		let { dob ,info} = details;
		return (
			<div className="container">
				<h4>{name}</h4>
				<h6>
					Date Of Birth : {dob} <br />
					Sport : {sport} <br />
					Country : {country}
				</h6>
                {info}
                <br />
                <Link to="/">{sport} Start</Link>
			</div>
		);
	}
}
export default Details;
