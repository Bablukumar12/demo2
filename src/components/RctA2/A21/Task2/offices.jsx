import React,{Component} from "react";
import { Link } from "react-router-dom";
class Offices extends Component {
    state ={}
    render(){
        let {offices} = this.props;
        return (
            <div className="container">
                <h4>List of Offices</h4>
                <div className="table">
                    {offices.map(o=>{
                        let {id,city,address}= o;
                        return(
                            <div className="row">
                                <div className="col-4 border"><Link to={`/office/${city}`}>{city}</Link></div>
                                <div className="col-8 border">{address}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Offices