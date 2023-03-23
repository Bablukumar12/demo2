import React, { Component } from "react";
class LeftOptions extends Component {
	state = {
		products: this.props.products,
		checkProducts: this.props.checkProducts,
		checkCategry: this.props.checkCategry,
        checkStatus : this.props.checkStatus,
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		let { currentTarget: input } = e;
		input.type === "checkbox"
			? (s1.checkProducts = this.updateCBs(
					input.checked,
					input.value,
					s1.checkProducts
			  ))
			: (s1[input.name] = input.value);
		this.props.onProducts(s1.checkProducts,s1.checkStatus);
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
	render() {
		let { products, checkProducts, checkCategry,checkStatus } = this.state;

		const productsName = products.map((p1) => p1.name);
		const categories = ["Food", "Toothpaste", "Soap", "Shampoo"];
        const statuses =["yes","no","arriving"];
		return (
			<React.Fragment>
				{this.showCheckboxes("Category", categories, "product", checkProducts)}
				{/* {this.showCheckboxes("", categories, "product", checkCategry)} */}
				{this.showRadios("Stock Status", statuses, "checkStatus", checkStatus)}
			</React.Fragment>
		);
	}

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
}
export default LeftOptions;
