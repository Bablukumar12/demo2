import React, { Component } from "react";

class Product extends Component {
    

	render() {
        
        const {id} = this.props.match.params;
		const { products } = this.props;

        let product = products.find(pr =>pr.id===(+id));
		return (
            <div className="container">
                
                Product Id : {id}
                <br />
                Brand : {product.brand}
                <br />
                Category : {product.category}
                <br />
                Name : {product.product}
                <br />
            </div>
        )
	}
}
export default Product;
