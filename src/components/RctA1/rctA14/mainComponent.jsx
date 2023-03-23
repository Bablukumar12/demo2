import React,{Component} from "react";
import Navbar from "./navbar";
class MainComponent extends Component {
    state = {};

    render(){
        let count = 10;
        let qty = 24;
        return (
            <React.Fragment>
                <Navbar count={count} qty={qty} />
                <div className="container">
                    <h6>Count = {count}</h6>
                    <h6>Quantity = {qty}</h6>
                </div>
            </React.Fragment>
        )
    }
}
export default MainComponent;