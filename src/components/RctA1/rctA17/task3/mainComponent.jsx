import React, { Component } from "react";
import Task3Form from "./task3Form";
class MainComponent extends Component {
	state = {
		products: [
			{
				name: "Pizza",
				description: "Delicious pizza with your choice of toppings.",
				productCode: "AS1234",
				category: "Food",
				price: 10.99,
				discount: 5,
			},
			{
				name: "Smartphone",
				description: "Latest smartphone with advanced features.",
				productCode: "AS1231",
				category: "Electronics",
				price: 599.99,
				discount: 10,
			},
			{
				name: "T-shirt",
				description: "Comfortable and stylish t-shirt for everyday wear.",
				productCode: "AS1235",
				category: "Apparels",
				price: 29.99,
				discount: 20,
			},
			{
				name: "Milk A",
				description: "Fresh milk from local farms.",
				productCode: "AS1236",
				category: "Grocery",
				price: 2.99,
				discount: 5,
			},
			{
				name: "Laptop",
				description: "High-performance laptop for work and play.",
				productCode: "AS1237",
				category: "Electronics",
				price: 999.99,
				discount: 10,
			},
			{
				name: "Jeans",
				description: "Durable and comfortable jeans for casual wear.",
				productCode: "AS1238",
				category: "Apparels",
				price: 49.99,
				discount: 20,
			},
		],
		product: {
			name: "",
			discription: "",
			productCode: "",
			category: "",
			price: "",
			discount: "",
		},
		view: 0,
		editIndex: -1,
	};
	handelAddProduct = () => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.editIndex = -1;
		s1.product = {
			name: "",
			discription: "",
			productCode: "",
			category: "",
			price: "",
			discount: "",
		};
		this.setState(s1);
	};
	onSubmit = (product) => {
		let s1 = { ...this.state };
		s1.editIndex === -1
			? s1.products.push(product)
			: (s1.products[s1.editIndex] = product);
		s1.view = 0;
		this.setState(s1);
	};
	handleDelete = (index) => {
		let s1 = { ...this.state };
		s1.products.splice(index, 1);
		this.setState(s1);
	};
	handleEdit = (index) => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.editIndex = index;
		s1.product = s1.products[index];
		this.setState(s1);
	};

	render() {
		let { products, view, product } = this.state;
		return (
			<div className="container">
				<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
					<a class="navbar-brand" href="#">
						Navbar
					</a>

					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link disabled" href="#">
								Number of Products : {products.length}
							</a>
						</li>
					</ul>
				</nav>
				{view === 0 ? (
					<div className="table">
						<div className="row bg-dark text-white mt-4">
							<div className="col-2 border">Name</div>
							<div className="col-2 border">Discription</div>
							<div className="col-2 border">Product Code</div>
							<div className="col-2 border">Category</div>
							<div className="col-1 border">Price</div>
							<div className="col-1 border">Discount</div>
							<div className="col-2 border"></div>
						</div>
						{products.map((p1, index) => {
							let {
								name,
								description,
								productCode,
								category,
								price,
								discount,
							} = p1;
							return (
								<div className="row">
									<div className="col-2 border">{name}</div>
									<div className="col-2 border">{description}</div>
									<div className="col-2 border">{productCode}</div>
									<div className="col-2 border">{category}</div>
									<div className="col-1 border">{price}</div>
									<div className="col-1 border">{discount}</div>
									<div className="col-2 border">
										<button
											className="btn btn-danger btn-sm bg-danger"
											onClick={() => this.handleDelete(index)}>
											Delete
										</button>
										<button
											className="btn btn-warning btn-sm bg-warning"
											onClick={() => this.handleEdit(index)}>
											Edit
										</button>
									</div>
								</div>
							);
						})}
						<button
							className="btn btn-primary mt-3"
							onClick={() => this.handelAddProduct()}>
							Add Product
						</button>
					</div>
				) : (
					<Task3Form onSubmit={this.onSubmit} product={product} />
				)}
			</div>
		);
	}
}
export default MainComponent;
