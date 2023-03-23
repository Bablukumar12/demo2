import React, { Component } from "react";
import http from "./httpService";

class AddPerson extends Component {
	state = {
		person: { name: "", age: "", city: "", company: "" },
		cities: ["London", "Paris", "New Delhi", "Banglore"],
		companies: ["Apple", "Google", "Facebook", "Microsoft", "Tesla"],
		edit: false,
	};
	componentDidMount() {
		this.fetchData();
	}
	componentDidUpdate(prevProps,prevState){
		if(prevProps !==this.props) this.fetchData();
	}
	async fetchData() {
		const { id } = this.props.match.params;
		if (id) {
			let response = await http.get(`/personApp/persons/${id}`);
			let { data } = response;
			this.setState({ person: data, edit: true });
		} else {
			const person = { name: "", age: "", city: "", company: "" };
			this.setState({ person: person, edit: false });
		}
	}
	handleChange = (e) => {
		const { currentTarget: input } = e;
		let s1 = { ...this.state };
		s1.person[input.name] = input.value;
		console.log(input.name, input.value);
		this.setState(s1);
	};

	async postData(url, obj) {
		let response = await http.post(url, obj);
		console.log(response);
		this.props.history.push("/persons");
	}
	async putData(url, obj) {
		let response = await http.put(url, obj);
		console.log(response);
		this.props.history.push("/persons");
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let { person, edit } = this.state;
		edit
			? this.putData(`/personApp/persons/${person.id}`, person)
			: this.postData("/personApp/persons", this.state.person);
		
	};

	render() {
		const { name, age, city, company } = this.state.person;
		const { cities, companies } = this.state;

		return (
			<div className="container">
				<div className="form-group">
					<label>Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						placeholder="Enter Name"
						value={name}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label>Age</label>
					<input
						type="text"
						className="form-control"
						id="age"
						name="age"
						placeholder="Enter Age"
						value={age}
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group">
					<select
						className="form-control my-2"
						name="city"
						id=""
						onChange={this.handleChange}>
						<option value="">Select City</option>
						{cities.map((c) => (
							<option selected={city===c} key={c} value={c}>
								{c}
							</option>
						))}
					</select>
				</div>

				<div className="form-group">
					<select
						className="form-control my-2"
						name="company"
						id=""
						onChange={this.handleChange}>
						<option value="">Select Company'</option>
						{companies.map((c) => (
							<option selected={company===c} key={c} value={c}>
								{c}
							</option>
						))}
					</select>
				</div>
				<button className="btn btn-primary" onClick={this.handleSubmit}>
					Submit
				</button>
			</div>
		);
	}
}
export default AddPerson;
