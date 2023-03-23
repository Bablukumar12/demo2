import React,{Component} from "react";
class Location extends Component {
    render(){
        const {offices} = this.props;
        const {location} = this.props.match.params;

        return (
            <div className="container">
                <h4>Welcome to the office of JX Company in {location}</h4>
                <h6>{offices.find(o=>o.city===location).address}</h6>
            </div>
        )
    }
}
export default Location;