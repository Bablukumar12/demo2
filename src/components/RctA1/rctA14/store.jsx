import React, { Component } from "react";
import Product from "./product";
import ProductTable from "./productTable";
class Store extends Component {
	state = {
		products: [
			{ name: "Maggi", code: "P1", price: 10.99, quantity: 20 },
			{ name: "Pepsi", code: "P2", price: 5.99, quantity: 15 },
			{ name: "Snickers", code: "P3", price: 15.99, quantity: 25 },
			{ name: "Coca-Cola", code: "P4", price: 20.99, quantity: 30 },
			{ name: "Lays", code: "P5", price: 25.99, quantity: 35 },
			{ name: "Sprite", code: "P6", price: 30.99, quantity: 40 },
			{ name: "KitKat", code: "P7", price: 35.99, quantity: 45 },
			{ name: "Doritos", code: "P8", price: 40.99, quantity: 50 },
		],
		viewGrid: false,
	};
	handleOrder = (index) => {
		let s1 = { ...this.state };
		index == 0
			? s1.products.sort((a, b) => a.quantity - b.quantity)
			: s1.products.sort((a, b) => a.price - b.price);
		this.setState(s1);
	};
	tableView = () => {
		let s1 = { ...this.state };
		s1.viewGrid = true;
		this.setState(s1);
	};
    gridView = () => {
		let s1 = { ...this.state };
		s1.viewGrid = false;
		this.setState(s1);
	};
	render() {
		let { products, viewGrid } = this.state;
		return (
			<div className="container text-center">
				<h5>Products in Store</h5>
				<button
					className="btn btn-primary btn-sm m-2"
					onClick={() => this.handleOrder(0)}>
					Order by Quantity
				</button>
				<button
					className="btn btn-primary btn-sm m-2"
					onClick={() => this.handleOrder(1)}>
					Order by Price
				</button>
				{!viewGrid ? (
					<React.Fragment>
						<button
							className="btn btn-primary btn-sm m-2"
							onClick={() => this.tableView()}>
							View : Table
						</button>
						<div className="row">
							{products.map((p1) => (
								<Product product={p1} />
							))}
						</div>
					</React.Fragment>
				) : (
					<React.Fragment>
						<button
							className="btn btn-primary btn-sm m-2"
							onClick={() => this.gridView()}>
							View : Grid
						</button>
						<div className="row">
							
								<ProductTable products={products} />
							
						</div>
					</React.Fragment>
				)}
			</div>
		);
	}
}
export default Store;
