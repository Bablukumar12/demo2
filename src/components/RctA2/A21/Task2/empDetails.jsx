import React,{Component} from "react";
import { Link } from "react-router-dom";
class EmpDetails extends Component {
    render(){
        const {id}= this.props.match.params;
        const {emps} =this.props;
        let emp = emps.find(e=>e.id===id);
        return (
            <div className="container">
                <h4>Employee Details</h4>
                <h6>Employee id : {id}</h6>
                <h6>Name : {emp.name}</h6>
                <h6>Department : <Link to={`/emps/dept/${emp.dept}`}>{emp.dept}</Link></h6>
                <h6>Designation : {emp.designation}</h6>

            </div>
        )
    }
}
export default EmpDetails;