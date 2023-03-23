import React, { Component } from "react";
class Task3Form extends Component {
	state = {
		product: this.props.product,
		categories: ["Food", "Electronics", "Apparels", "Grocery"],
		discounts: [5, 10, 20],
		errors: {},
	};
	handleChange = (e) => {
		let { currentTarget: input } = e;
		let s1 = { ...this.state };
		s1.product[input.name] = input.value;
		this.handleValidate(e);
		this.setState(s1);
	};
	handleSubmit = () => {
		let s1 = { ...this.state };
		let errors = this.validateAll();
		if (this.isValid(errors)) {
			this.props.onSubmit(s1.product);
		} else {
			s1.errors = errors;
		}
		this.setState(s1);
	};
	isValid = (errors) => {
		let keys = Object.keys(errors);
		let count = keys.reduce((acc, curr) => (errors[curr] ? acc + 1 : acc), 0);
		return count === 0;
	};
	validateAll = () => {
		let { name, description, category, price, discount, productCode } =
			this.state.product;
		let errors = {};
		errors.name = this.validateName(name, /^[A-Za-z ]+$/);
		errors.description = this.validatedescription(description);
		errors.productCode = this.validateProductCode(
			productCode,
			/^[A-Z]{2}\d{4}$/
		);
		errors.category = this.validateCategory(category);
		errors.price = this.validatePrice(price);
		errors.discount = this.validateDiscount(discount);
		return errors;
	};

	validateName = (name, regex = /^[A-Za-z ]+$/) =>
		!name
			? "Name must be entered"
			: !regex.test(name)
			? "Should contain only a-z and A-Z"
			: name.length < 5
			? "Name should have minimum 5 characteres"
			: "";

	validatedescription = (description) =>
		!description
			? "description must be entered"
			: description.length < 10
			? "description should have minimum 10 characteres"
			: /^[a-zA-Z\s]{10,}$/.test(description)
			? ""
			: "Should not have any special characters except space";

	validateProductCode = (productCode, regex = /^[A-Z]{2}\d{4}$/) =>
		!productCode
			? "Producuct Code must be entered"
			: productCode.length < 6
			? "Product Code should have 6 characteres"
			: regex.test(productCode)
			? ""
			: "First 2 characters should be uppercase alphabets and last 4 characters should be digits";

	validateCategory = (category) =>
		!category ? "Category must be selected" : "";
	validatePrice = (price) =>
		!price
			? "Price must be entered"
			: price <= 0
			? "Price should be greater than 0"
			: "";

	validateDiscount = (discount) =>
		!discount ? "one of them should be checked" : "";

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
			case "description":
				s1.errors.description = this.validatedescription(input.value);
				break;
			case "productCode":
				s1.errors.productCode = this.validateProductCode(input.value);
				break;
			case "category":
				s1.errors.category = this.validateCategory(input.value);
				break;
			case "price":
				s1.errors.price = this.validatePrice(input.value);
				break;
			case "discount":
				s1.errors.discount = this.validateDiscount(input.value);
				break;
			default:
				break;
		}
		this.setState(s1);
	};
	render() {
		let { product, categories, discounts, errors } = this.state;
		let { name, description, productCode, category, price, discount } = product;
		return (
			<div className="container">
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
							{errors.name} <br />
						</span>
					) : (
						""
					)}
					<label htmlFor="">description</label>
					<input
						type="text"
						className="form-control"
						name="description"
						value={description}
						onChange={this.handleChange}
						onBlur={this.handleValidate}
					/>
					{errors.description ? (
						<span className="text-danger">
							{errors.description} <br />
						</span>
					) : (
						""
					)}
					<label htmlFor="">Product Code</label>
					<input
						type="text"
						className="form-control"
						name="productCode"
						value={productCode}
						onChange={this.handleChange}
						onBlur={this.handleValidate}
					/>
					{errors.productCode ? (
						<span className="text-danger">
							{errors.productCode} <br />
						</span>
					) : (
						""
					)}
					<label htmlFor="">Category</label>
					<select
						name="category"
						id=""
						className="form-control"
						value={category}
						onChange={this.handleChange}
						onBlur={this.handleValidate}>
						<option disabled selected value="">
							Select Category
						</option>
						{categories.map((c1) => (
							<option value={c1}>{c1}</option>
						))}
					</select>
					{errors.category ? (
						<span className="text-danger">
							{errors.category} <br />
						</span>
					) : (
						""
					)}

					<label htmlFor="">Price</label>
					<input
						type="number"
						className="form-control"
						name="price"
						value={price}
						onChange={this.handleChange}
						onBlur={this.handleValidate}
					/>
					{errors.price ? (
						<span className="text-danger">
							{errors.price} <br />
						</span>
					) : (
						""
					)}

					<label htmlFor="">Discount</label>
					{discounts.map((d1) => {
						return (
							<div>
								<input
									type="radio"
									className="form-check-inline"
									name="discount"
									value={d1}
									checked={d1 == discount}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
								/>
								<label htmlFor="">{d1} %</label>
							</div>
						);
					})}
					{errors.discount ? (
						<span className="text-danger">
							{errors.discount} <br />
						</span>
					) : (
						""
					)}
					<button
						className="btn btn-primary mt-2"
						onClick={this.handleSubmit}
						disabled={!this.isFormValid()}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default Task3Form;
