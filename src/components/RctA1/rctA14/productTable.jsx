import React, { Component } from "react";
class ProductTable extends Component {
	render() {
		let { products } = this.props;

		return (
			<table className="table">
				<div className="row bg-dark text-white">
					<div className="col-3">Name</div>
					<div className="col-2">Code</div>
					<div className="col-2">Price</div>
					<div className="col-2">Quantity</div>
					<div className="col-3"></div>
				</div>
				{products.map((p1) => {
					let { name, code, price, quantity } = p1;
					return (
						<div className="row">
							<div className="col-3">{name}</div>
							<div className="col-2">{code}</div>
							<div className="col-2">{price}</div>
							<div className="col-2">{quantity}</div>
							<div className="col-3">
								<button className="btn btn-success bg-success btn-sm">+</button>
                                <button className="btn btn-danger bg-danger btn-sm">-</button>
							</div>
						</div>
					);
				})}
			</table>
		);
	}
}
export default ProductTable;
