import React, { Component } from "react";
class SimpleForm extends Component {
	state = {
		person: this.props.person,
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		s1.person[e.currentTarget.name] = e.currentTarget.value;
		this.setState(s1);
	};
	handelSubmit = (e) => {
		e.preventDefault();
		console.log("handle submit", this.state.person);
		this.props.onSubmit(this.state.person);
	};
	render() {
		let { person } = this.state;
		let { name, age } = person;
		return (
			<div className="container">
				<h5>{this.props.edit ? "Edit Details" : "Enter Details of Person"}</h5>
				<div className="form-group">
					<label>Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={name}
						placeholder="Enter Name"
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
						value={age}
						placeholder="Enter Age"
						onChange={this.handleChange}
					/>
				</div>
				<button className="btn btn-primary m-2" onClick={this.handelSubmit}>
					{this.props.edit ? "Update" : "Submit"}
				</button>
			</div>
		);
	}
}
export default SimpleForm;
