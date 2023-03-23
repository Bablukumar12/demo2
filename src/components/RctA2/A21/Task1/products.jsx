import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import ShowOptions from "./showOptions";

class Products extends Component {
	handleClick = (br) => {
		this.props.history.push(`/brand/${br}`);
	};
	handleOptionChange = (options) => {
		this.callURL("/products", options);
	};
	callURL = (url, options) => {
		let searchStr = this.makeSearchString(options);
		this.props.history.push({
			pathname: url,
			search: searchStr,
		});
	};
	makeSearchString = (options) => {
		let { minPrice, maxPrice, inStock } = options;
		let searchStr = "";
		searchStr = this.addToQueryString(searchStr, "minPrice", minPrice);
		searchStr = this.addToQueryString(searchStr, "maxPrice", maxPrice);
		searchStr = this.addToQueryString(searchStr, "inStock", inStock);
		return searchStr;
	};
	addToQueryString = (str, paramName, paramValue) =>
		paramValue
			? str
				? `${str}&${paramName}=${paramValue}`
				: `${paramName}=${paramValue}`
			: str;

	render() {
		const { products, display } = this.props;

		const { value } = this.props.match.params;
		const queryParams = queryString.parse(this.props.location.search);
		console.log(queryParams);

		let products1 = display
			? products.filter((pr) => pr[display] === value)
			: products;
		let brands = products.reduce(
			(acc, curr) =>
				acc.find((a) => a === curr.brand) ? acc : [...acc, curr.brand],
			[]
		);
		let { minPrice, maxPrice, inStock } = queryParams;
		products1 = minPrice
			? products1.filter((pr) => pr.price >= +minPrice)
			: products1;
		products1 = maxPrice
			? products1.filter((pr) => pr.price <= +maxPrice)
			: products1;
		products1 = inStock
			? products1.filter((pr) =>
					inStock === "yes"
						? pr.inStock
						: inStock === "no"
						? !pr.inStock
						: false
			  )
			: products1;
		return (
			<div className="container">
				<h4>Welcome to the PRODUCTS page</h4>
				<h6>
					<ShowOptions
						options={queryParams}
						onOptionChange={this.handleOptionChange}
					/>
					{/* {brands.map((br) => (
						<button
							className="btn btn-primary btn-sm m-2"
							onClick={() => this.handleClick(br)}>
							{br}
						</button>
					))} */}
				</h6>
				{products1.map((p1) => (
					<div className="row">
						<div className="col-1 border">
							<Link to={`/product/${p1.id}`}>{p1.id}</Link>
						</div>
						<div className="col-2 border">
							<Link to={`/brand/${p1.brand}`}>{p1.brand}</Link>
						</div>
						<div className="col-3 border">
							<Link to={`/category/${p1.category}`}>{p1.category}</Link>
						</div>
						<div className="col-3 border">{p1.product}</div>
						<div className="col-1 border">{p1.price}</div>
						<div className="col-2 border">{"" + p1.inStock}</div>
					</div>
				))}
			</div>
		);
	}
}
export default Products;
