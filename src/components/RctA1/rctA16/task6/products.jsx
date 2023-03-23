import React, { Component } from "react";
import LeftOptions from "./leftOptions";
class Products extends Component {
	state = {
		products: [
			{ id: "PEP110", name: "Pepsi", category: "Food", stock: "yes" },
			{ id: "CLO876", name: "CloseUp", category: "Toothpaste", stock: "no" },
			{ id: "PEA531", name: "Pears", category: "Soap", stock: "arriving" },
			{ id: "LU7264", name: "Lux", category: "Soap", stock: "yes" },
			{ id: "COL112", name: "Colgate", category: "Toothpaste", stock: "no" },
			{ id: "DM881", name: "Dairy Milk", category: "Food", stock: "arriving" },
			{ id: "LI130", name: "Liril", category: "Soap", stock: "yes" },
			{ id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: "no" },
			{ id: "MAG441", name: "Maggi", category: "Food", stock: "arriving" },
			{ id: "PNT560", name: "Pantene", category: "Shampoo", stock: "no" },
			{ id: "KK219", name: "KitKat", category: "Food", stock: "arriving" },
			{ id: "DOV044", name: "Dove", category: "Soap", stock: "yes" },
		],
		checkStatus: "",
		checkProducts: [],
	};
	handleProducts = (checkProducts,checkStatus) => {
        
		let s1 = { ...this.state };
		s1.checkProducts = checkProducts;
        s1.checkStatus = checkStatus;
		this.setState(s1);
	};
	render() {
		let { products, checkProducts, checkCategry ,checkStatus} = this.state;
		const fProducts1 = products.filter((p1) => checkProducts.findIndex(c1=>c1===p1.category)>=0);
        const fProducts = checkStatus? fProducts1.filter((p1) => p1.stock===checkStatus) : fProducts1;
        return (
			<div className="container">
				<div className="row">
					<div className="col-3 border">
						<LeftOptions
							products={products}
							checkProducts={checkProducts}
							checkCategry={checkCategry}
							onProducts={this.handleProducts}
						/>
					</div>
					<div className="col-9 border">
						Category : {checkProducts.map(c1=>c1 +",")} <br />
                        Stock Status : {checkStatus ? checkStatus : "All"}
						{fProducts.map((f1) => (
							<div className="row">
								<div className="col-3">{f1.name}</div>
								<div className="col-3">{f1.category}</div>
								<div className="col-3">{f1.id}</div>
								<div className="col-3">{f1.stock}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default Products;
