import React, { Component } from "react";
import { Link } from "react-router-dom";
class AddEmp extends Component {
	state = {
		emp: { id: "", name: "", dept: "", designation: "" },
	};
    handleChange =(e)=>{
        let s1 = {...this.state};
        let {currentTarget: input} = e;
        s1.emp[input.name] = input.value;
        this.setState(s1);
    }
	render() {
		let { id, name, dept, designation } = this.state.emp;
		return (
			<div className="form-group">
				<label htmlFor="">Id</label>
				<input
					type="text"
					className="form-control"
					name="id"
					value={id}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Name</label>
				<input
					type="text"
					className="form-control"
					name="name"
					value={name}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Dept</label>
				<input
					type="text"
					className="form-control"
					name="dept"
					value={dept}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Designation</label>
				<input
					type="text"
					className="form-control"
					name="designation"
					value={designation}
					onChange={this.handleChange}
				/>
                <button className="btn btn-primary my-2" onClick={()=>this.props.onSubmit(this.state.emp)}><Link className="text-white" to={`/emps/1`}>Submit</Link></button>
			</div>
		);
	}
}
export default AddEmp;
