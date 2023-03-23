import React, { Component } from "react";

class CustomerForm extends Component {
	state = {
		customer: this.props.customer,
		errors: {},
		countries: ["United State of America", "Canada", "India", "United Kingdom"],
	};

	handleChange = (e) => {
		let s1 = { ...this.state };
		s1.customer[e.currentTarget.name] = e.currentTarget.value;
		this.handleValidate(e);
		this.setState(s1);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		let errors = this.validateAll();
		if (this.isValid(errors)) this.props.onSubmit(this.state.customer);
		else {
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
		let { name, age, country } = this.state.customer;
		let errors = {};
		errors.name = this.validateName(name);
		errors.age = this.validateAge(age);
		errors.country = this.validateCountry(country);
		return errors;
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

	validateCountry = (country) => (!country ? "Country must be selected" : "");
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
			case "country":
				s1.errors.country = this.validateCountry(input.value);
				break;
			default:
				break;
		}
		this.setState(s1);
	};
	render() {
		let { onSubmit } = this.props;
		let { name, age, country } = this.state.customer;
		let { errors } = this.state;
		return (
			<div className="form-group">
				<label htmlFor="">Name</label>
				<input
					type="text"
					className="form-control"
					name="name"
					value={name}
					onChange={this.handleChange}
					onBlur={this.handleValidate}
				/>
				{errors.name ? (
					<span className="text-danger">
						{errors.name}
						<br />{" "}
					</span>
				) : (
					""
				)}
				<label htmlFor="">Age</label>
				<input
					type="number"
					className="form-control"
					name="age"
					value={age}
					onChange={this.handleChange}
					onBlur={this.handleValidate}
				/>
				{errors.age ? (
					<span className="text-danger">
						{errors.age}
						<br />{" "}
					</span>
				) : (
					""
				)}

				<br />
				<select
					className="form-control"
					name="country"
					value={country}
					id=""
					onChange={this.handleChange}
					onBlur={this.handleValidate}>
					<option selected disabled value="">
						Choose Chountry
					</option>
					{this.state.countries.map((c1) => (
						<option value={c1}>{c1}</option>
					))}
				</select>
				{errors.country ? (
					<span className="text-danger">
						{errors.country}
						<br />{" "}
					</span>
				) : (
					""
				)}

				<br />
				<button
					className="btn btn-primary"
					onClick={this.handleSubmit}
					disabled={!this.isFormValid()}>
					Submit
				</button>
			</div>
		);
	}
}

export default CustomerForm;
