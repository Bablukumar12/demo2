import React, { Component } from "react";
import NavBar from "./navbar";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./home";
import Contact from "./contact";
import Products from "./products";
import Product from "./product";
import Stores from "./stores";
import Store from "./store";
import AddProduct from "./addProduct";
import AddStore from "./addStore";
class MainComponent extends Component {
	state = {
		products: [
			{ id: 1, brand: "Nike", category: "Footwear", product: "Air Max 90", price: 100, inStock: true },
			{ id: 2, brand: "Adidas", category: "Apparel", product: "T-Shirt", price: 20, inStock: true },
			{ id: 3, brand: "Apple", category: "Electronics", product: "iPhone 12", price: 899, inStock: false },
			{ id: 4, brand: "Samsung", category: "Electronics", product: "Galaxy S21", price: 799, inStock: true },
			{ id: 5, brand: "Sony", category: "Electronics", product: "PlayStation 5", price: 499, inStock: false },
			{ id: 6, brand: "Levi's", category: "Apparel", product: "Jeans", price: 70, inStock: true },
			{ id: 7, brand: "Coca-Cola", category: "Beverages", product: "Coke", price: 1.5, inStock: false },
			{ id: 8, brand: "Puma", category: "Footwear", product: "Suede Classic", price: 65, inStock: true },
			{ id: 9, brand: "Microsoft", category: "Electronics", product: "Xbox Series X", price: 499, inStock: true },
			{ id: 10, brand: "Canon", category: "Cameras", product: "EOS R6", price: 2299, inStock: false }
		]
		,
		contact: {
			email: "john.doe@example.com",
			address: "402, 4th Floor,Tower D1",
		},

		stores: [
			{
				id: 101,
				location: "Delhi",
				email: "store101@email.com",
				mobile: "2734672371",
			},
			{
				id: 102,
				location: "Mumbai",
				email: "store102@email.com",
				mobile: "4645757441",
			},
			{
				id: 103,
				location: "Delhi",
				email: "store103@email.com",
				mobile: "983452887",
			},
			{
				id: 104,
				location: "Bengaluru",
				email: "store104@email.com",
				mobile: "782234663",
			},
			{
				id: 108,
				location: "Delhi",
				email: "store108@email.com",
				mobile: "850003461",
			},
			{
				id: 114,
				location: "Bengaluru",
				email: "store114@email.com",
				mobile: "900346731",
			},
			{
				id: 125,
				location: "Delhi",
				email: "store125@email.com",
				mobile: "95134274005",
			},
			{
				id: 129,
				location: "Mumbai",
				email: "store129@email.com",
				mobile: "9823574623",
			},
			{
				id: 141,
				location: "Mumbai",
				email: "store141@email.com",
				mobile: "89239472385",
			},
			{
				id: 156,
				location: "Bengaluru",
				email: "store157@email.com",
				mobile: "965746731",
			},
			{
				id: 21,
				location: "Delhi",
				email: "store021@email.com",
				mobile: "959530041",
			},
			{
				id: 277,
				location: "Mumbai",
				email: "store277@email.com",
				mobile: "8900673411",
			},
			{
				id: 89,
				location: "Bengaluru",
				email: "store89@email.com",
				mobile: "782234663",
			},
			{
				id: 120,
				location: "Delhi",
				email: "store120@email.com",
				mobile: "850003461",
			},
			{
				id: 255,
				location: "Bengaluru",
				email: "store255@email.com",
				mobile: "900346731",
			},
			{
				id: 17,
				location: "Delhi",
				email: "store17@email.com",
				mobile: "95134274005",
			},
			{
				id: 27,
				location: "Mumbai",
				email: "store27@email.com",
				mobile: "9823574623",
			},
		],
	};
	handleAddProduct = (pr) => {
		console.log(pr);
		let s1 = { ...this.state };
		s1.products.push(pr);

		this.setState(s1);
	};
	handleSubmit=(store) =>{
		let s1 = {...this.state};
		s1.stores.push(store);
		this.state(s1);
	}
	render() {
		let { products, contact, stores } = this.state;
		return (
			<div className="container">
				<NavBar />
				<Switch>
					<Route
						path="/product/:id"
						render={(props) => <Product {...props} products={products} />}
					/>
					<Route
						path="/brand/:value"
						render={(props) => (
							<Products {...props} products={products} display="brand" />
						)}
					/>
					<Route
						path="/category/:value"
						render={(props) => (
							<Products {...props} products={products} display="category" />
						)}
					/>

					<Route
						path="/store/:id"
						render={(props) => <Store {...props} stores={stores} />}
					/>
					
					<Route
						path="/location/:loc/:page"
						render={(props) => <Stores {...props} stores={stores} />}
					/>
					<Route
						path="/location/:loc"
						render={(props) => <Stores {...props} stores={stores} />}
					/>
					<Route
						path="/location"
						render={(props) => <Stores {...props} stores={stores} />}
					/>

					<Route path="/home" component={Home} />
					<Route
						path="/contact"
						render={(props) => <Contact {...props} contact={contact} />}
					/>
					<Route
						path="/addStore"
						render={(props) => <AddStore {...props} onSubmit={this.handleSubmit} />}
					/>
					<Route
						path="/products"
						render={(props) => <Products {...props} products={products} />}
					/>
					<Route
						path="/stores/:page"
						render={(props) => <Stores {...props} stores={stores} />}
					/>
					
					<Route
						path="/stores"
						render={(props) => <Stores {...props} stores={stores} />}
					/>
					<Route
						path="/addProduct"
						render={(props) => (
							<AddProduct
								{...props}
								productInfo={{}}
								onSubmit={this.handleAddProduct}
							/>
						)}
					/>
					{/* <Redirect from="/" to="/home" /> */}
				</Switch>
			</div>
		);
	}
}
export default MainComponent;
