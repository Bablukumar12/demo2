import React,{Component} from "react";
class Product extends Component {
    state = {};

    render(){
        let {product} = this.props;
        let{name,code,price,quantity} = product;
        return (
            <div className="col-3 bg-info border text-center">
                <span className="fw-bolder">{name} </span><br />
                Code : {code} <br />
                Price : {price} <br />
                Quantity : {quantity} <br />
                <button className="btn btn-light btn-sm m-2">Increase</button>
                <button className="btn btn-light btn-sm m-2">Decrease</button>
                
                </div>
        )
    }
}
export default Product;