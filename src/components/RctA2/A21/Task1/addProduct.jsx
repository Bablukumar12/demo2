import React, { Component } from "react";
class AddProduct extends Component {
	state = {
		productInfo: this.props.productInfo,
	};
	handleChange = (e) => {
		const { currentTarget: input } = e;
		let s1 = { ...this.state };
		input.name === "inStock"
			? (s1.productInfo[input.name] = input.checked)
			: (s1.productInfo[input.name] = input.value);
		this.setState(s1);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.productInfo);
        this.props.history.push("/products");

	};
	render() {
		let { id, brand, category, product, price, inStock } =
			this.state.productInfo;
		return (
			<div className="container">
				<div className="form-group">
					<label htmlFor="">Product Id</label>
					<input
						type="text"
						className="form-control"
						name="id"
						value={id}
						onChange={this.handleChange}
					/>

					<label htmlFor="">Product Brand</label>
					<input
						type="text"
						className="form-control"
						name="brand"
						value={brand}
						onChange={this.handleChange}
					/>

					<label htmlFor="">Product Category</label>
					<input
						type="text"
						className="form-control"
						name="category"
						value={category}
						onChange={this.handleChange}
					/>

					<label htmlFor="">Product Name</label>
					<input
						type="text"
						className="form-control"
						name="product"
						value={product}
						onChange={this.handleChange}
					/>

					<label htmlFor="">Product Price</label>
					<input
						type="text"
						className="form-control"
						name="price"
						value={price}
						onChange={this.handleChange}
					/>

					<input
						type="checkbox"
						className="form-check-inline"
						name="inStock"
						value={inStock}
                        checked={inStock}
						onChange={this.handleChange}
					/>
					<label htmlFor=""> In Stock</label>
                    <br />
                    <button className="btn btn-primary m-2" onClick={this.handleSubmit}>Submit</button>
				</div>
			</div>
		);
	}
}
export default AddProduct;
