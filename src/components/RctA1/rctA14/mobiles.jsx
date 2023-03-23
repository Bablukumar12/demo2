import React,{Component} from "react";
class Mobiles extends Component {
    state = {};

    render(){
        let {mobile,index,onAddToCart} = this.props;
        let {name,desc1,desc2,price} = mobile;
        return (
            <div className="col-4 bg-success border">
              <span className="fw-bold">{name} ({desc1})</span> <br />
              {desc2} <br />
              <button className="btn btn-light btn-sm m-2"onClick={()=>onAddToCart(index)} >Just{price}</button>

            </div>
        )
    }
}
export default Mobiles;