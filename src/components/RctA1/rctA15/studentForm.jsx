import React, { Component } from "react";
class StudentForm extends Component {
    state ={
        student : this.props.student,
    }
    handleChange = (e) =>{
        let s1 = {...this.state} ;
        s1.student[e.currentTarget.name] = e.currentTarget.value;
        this.setState(s1);
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.student);
    }
	render() {
		let { id, name } = this.state.student;
		return (
			<div className="container">
				<h5>Enroll Student in Course</h5>
				<div className="form-group">
					<label htmlFor="">Student ID</label>
					<input
						type="text"
						className="form-control"
						id="id"
                        name ="id"
						value={id}
						placeholder="Enter Student ID"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="">Name of the Student</label>
					<input
						type="text"
						className="form-control"
						id="name"
                        name="name"
						value={name}
						placeholder="Enter Student Name"
						onChange={this.handleChange}
					/>
				</div>
				<button className="btn btn-primary" onClick={this.handleSubmit}>
					Enroll Student
				</button>
			</div>
		);
	}
}
export default StudentForm;
