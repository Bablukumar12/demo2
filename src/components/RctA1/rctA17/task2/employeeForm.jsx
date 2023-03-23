import React, { Component } from "react";
class EmployeeForm extends Component {
	state = {
		emplooyes: { name: "", age: "", email: "", city: "", address: "" },
		errors: {},
	};

	handleChange = (e) => {
		let s1 = { ...this.state };
		let { currentTarget: input } = e;
		s1.emplooyes[input.name] = input.value;
		this.handleValidate(e);
		this.setState(s1);
	};
	handleValidate = (e) => {
		let { currentTarget: input } = e;
		let s1 = { ...this.state };
		switch (input.name) {
			case "name":
				s1.errors.name = this.validateName(input.value);
				break;
			case "age":
				s1.errors.age = this.validateAge(input.value);
				break;
			case "email":
				s1.errors.email = this.validateEmail(input.value);
				break;
			case "city":
				s1.errors.city = this.validateCity(input.value);
				break;
			default:
				break;
		}
		this.setState(s1);
	};

	validateName = (name) =>
		!name
			? "Name must be entered"
			: name.length < 5
			? "Name should have minimum 5 characteres"
			: "";

	validateAge = (age) =>
		!age
			? "Age must be entered"
			: age < 21 || age > 75
			? "Age should be between 21 and 75"
			: "";

	validateEmail = (email) => (!email ? "Email must be entered" : "");
	validateCity = (city) => (!city ? "City must be entered" : "");

	handleSubmit = (e) => {
		e.preventDefault();
		let errors = this.validateAll();
		if (this.isValid(errors)) {
			alert("Successfully Submitted");
		} else {
			let s1 = { ...this.state };
			s1.errors = errors;
			this.setState(s1);
		}
	};
	isValid = (errors) => {
		let keys = Object.keys(errors);
		let count = keys.reduce((acc, curr) => (errors[curr] ? acc + 1 : acc), 0);
		return count === 0;
	};
	validateAll = () => {
		let { name, age, email, city } = this.state.emplooyes;
		let errors = {};
		errors.name = this.validateName(name);
		errors.age = this.validateAge(age);
		errors.email = this.validateEmail(email);
		errors.city = this.validateCity(city);
		return errors;
	};
	isFormValid = () => {
		let errors = this.validateAll();
		return this.isValid(errors);
	};
	handleValidate = (e) => {
		let { currentTarget: input } = e;
		let s1 = { ...this.state };
		switch (input.name) {
			case "name":
				s1.errors.name = this.validateName(input.value);
				break;
			case "age":
				s1.errors.age = this.validateAge(input.value);
				break;
			case "city":
				s1.errors.city = this.validateCity(input.value);
				break;
			case "email":
				s1.errors.email = this.validateEmail(input.value);
				break;
			default:
				break;
		}
		this.setState(s1);
	};
	render() {
		let { name, age, email, city, address } = this.state.emplooyes;
		let { errors } = this.state;
		return (
			<div className="container  form-group">
				<label htmlFor=""> Name :</label>
				<input
					className="form-control"
					type="text"
					name="name"
					value={name}
					onChange={this.handleChange}
					onBlur={this.handleValidate}
				/>
				{errors.name ? <span className="text-danger">{errors.name}</span> : ""}
				<br />
				<label htmlFor=""> Age :</label>
				<input
					className="form-control"
					type="number"
					name="age"
					value={age}
					onChange={this.handleChange}
					onBlur={this.handleValidate}
				/>
				{errors.age ? <span className="text-danger">{errors.age}</span> : ""}
				<br />
				<label htmlFor=""> Email :</label>
				<input
					className="form-control"
					type="email"
					name="email"
					value={email}
					onChange={this.handleChange}
					onBlur={this.handleValidate}
				/>
				{errors.email ? (
					<span className="text-danger">{errors.email}</span>
				) : (
					""
				)}
				<br />
				<label htmlFor=""> City :</label>
				<input
					className="form-control"
					type="text"
					name="city"
					value={city}
					onChange={this.handleChange}
					onBlur={this.handleValidate}
				/>
				{errors.city ? <span className="text-danger">{errors.city}</span> : ""}
				<br />
				<label htmlFor=""> Address :</label>
				<input
					className="form-control"
					type="text"
					name="address"
					value={address}
					onChange={this.handleChange}
				/>
				{errors.address ? (
					<span className="text-danger">{errors.address}</span>
				) : (
					""
				)}
				<button
					className="btn btn-primary m-2"
					onClick={this.handleSubmit}
					disabled={!this.isFormValid()}>
					Submit
				</button>
			</div>
		);
	}
}
export default EmployeeForm;
