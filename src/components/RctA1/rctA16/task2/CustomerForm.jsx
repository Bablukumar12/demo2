import React, { Component } from "react";
class CustomerForm extends Component {
	state = {
		customer: this.props.customer,
	};
	handleChange = (e) => {
		let { currentTarget: input } = e;
		let s1 = { ...this.state };
		input.name === "paymentOption"
			? (s1.customer.paymentOption = this.updateCBs(
					input.checked,
					input.value,
					s1.customer.paymentOption
			  ))
			: (s1.customer[input.name] = input.value);
		this.setState(s1);
	};
	updateCBs = (checked, value, arr) => {
		if (checked) arr.push(value);
		else {
			let index = arr.findIndex((ele) => ele === value);
			if (index >= 0) arr.splice(index, 1);
		}
		return arr;
	};

	handleSubmit = () =>{
		let s1 = {...this.state};
		this.props.onSubmit(s1.customer);
	}
	render() {
		let { name, deliveryOption, paymentOption, gender,deliverySlot } = this.state.customer;
		let { deliveryOptions, paymentOptions, genders,deliverySlots } = this.props;
		return (
			<React.Fragment>
				<div className="form-group">
					<label htmlFor="">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={name}
						placeholder="Enter Name"
						onChange={this.handleChange}
					/>
					{this.showRadios("", genders, "gender", gender)}
					{this.showRadios(
						"Choose your Delivery Option",
						deliveryOptions,
						"deliveryOption",
						deliveryOption
					)}
					{this.showCheckboxes(
						"Choose your Payment Option",
						paymentOptions,
						"paymentOption",
						paymentOption
					)}
					{this.showDropdowns(
						"",
						deliverySlots,
						"deliverySlot",
						deliverySlot
					)}
					<button className="btn btn-primary mt-2" onClick={this.handleSubmit}>Submit</button>
				</div>
			</React.Fragment>
		);
	}
	showRadios = (label, arr, name, selVal) => {
		return (
			<React.Fragment>
				<label htmlFor="" className="form-check-label fw-bold">
					{label}
				</label>
				{arr.map((opt) => (
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							name={name}
							value={opt}
							checked={selVal === opt}
							onChange={this.handleChange}
						/>
						<label htmlFor="" className="form-check-label">
							{opt}
						</label>
					</div>
				))}
			</React.Fragment>
		);
	};

	showCheckboxes = (label, arr, name, selArr) => {
		return (
			<React.Fragment>
				<label className="form-check-label fw-bold">{label}</label>
				{arr.map((opt, index) => (
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							value={opt}
							name={name}
							checked={selArr.findIndex((sel) => sel === opt) >= 0}
							onChange={this.handleChange}
						/>
						<label htmlFor="" className="form-check-label">
							{opt}
						</label>
					</div>
				))}
			</React.Fragment>
		);
	};

	showDropdowns = (label, arr, name, selVal) => {
		return (
			<React.Fragment>
				<div className="form-group">
					<label htmlFor="">{label}</label>
					<select
						name={name}
						className="form-control"
						value={selVal}
						onChange={this.handleChange}>
						<option disabled selected value="">
							Select the Delivey Slot
						</option>
						{arr.map((c1) => (
							<option>{c1}</option>
						))}
					</select>
				</div>
			</React.Fragment>
		);
	};
}
export default CustomerForm;
