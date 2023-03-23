import React, { Component } from "react";
class ShowOptions extends Component {
	handleChange = (e) => {
		const { currentTarget: input } = e;
		let options = { ...this.props.options };
		options[input.name] = input.value;
		this.props.onOptionChange(options);
	};
	render() {
		let { minPrice = "", maxPrice = "", inStock = "" } = this.props.options;
		let prices = [0, 25, 50, 75, 100];
		let stocks = [
			{ display: "In Stock", value: "yes" },
			{ display: "Out of Stock", value: "no" },
		];
		return (
			<div className="row">
				<div className="col-4">
					<div className="form-group">
						<select
							name="minPrice"
							id=""
							className="form-control"
							value={minPrice}
							onChange={this.handleChange}>
							<option selected disabled value="">Select Min Price</option>
							{prices.map((pr) => (
								<option value={pr}>{pr}</option>
							))}
						</select>
					</div>
				</div>
				<div className="col-4">
					<div className="form-group">
						<select
							name="maxPrice"
							id=""
							className="form-control"
							value={maxPrice}
							onChange={this.handleChange}>
							<option selected disabled value="">Select Max Price</option>
							{prices.map((pr) => (
								<option value={pr}>{pr}</option>
							))}
						</select>
					</div>
				</div>

				<div className="col-4">
					<div className="form-group">
						<select
							name="inStock"
							id=""
							className="form-control"
							value={inStock}
							onChange={this.handleChange}>
							<option selected disabled value="">Select Stock Position</option>
							{stocks.map((st) => (
								<option value={st.value}>{st.display}</option>
							))}
						</select>
					</div>
				</div>
			</div>
		);
	}
}
export default ShowOptions;
