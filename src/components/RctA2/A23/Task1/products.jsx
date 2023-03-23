import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "./httpService.js";

class Products extends Component {
	state = { products: [] };
	async componentDidMount() {
		let response = await http.get("/productApp/products");
		let { data } = response;
		this.setState({ products: data });
	}
	render() {
        let {products}= this.state;
		return (
            <div className="container">
                <h4>Welcome to the PRODUCTS page</h4>
                {products.map((pr)=>(
                    <div className="row">
                        <div className="col-2 border">
                            <Link to={`/products/${pr.id}`}>{pr.id}</Link>
                        </div>
                        <div className="col-2 border">{pr.name}</div>
                        <div className="col-2 border">{pr.price}</div>
                    </div>
                ))}
            </div>
        )
	}
}
export default Products;
