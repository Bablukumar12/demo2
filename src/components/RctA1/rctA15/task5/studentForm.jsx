import React, { Component } from "react";
class StudentForm extends Component {
	state = {
		student: this.props.student,
	};
    handleChange = (e)=>{
        let s1 = {...this.state};
        s1.student[e.currentTarget.name] = e.currentTarget.value;
        this.setState(s1);
    }
handleSubmit =(e)=>{
    e.preventDefault();
    this.props.onSubmit(this.state.student);
    console.log(this.state.student)
}
	render() {
        let {name,course,year} = this.state.student;
		return (
			<div className="form-group">
				<label htmlFor="">Name</label>
				<input
					type="text"
					className="form-control"
                    id="name"
					name="name"
					value={name}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Course</label>
				<input
					type="text"
					className="form-control"
					name="course"
                    id="course"
					value={course}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Year</label>
				<input
					type="text"
					className="form-control"
					name="year"
                    id="year"
					value={year}
					onChange={this.handleChange}
				/>

				<br />
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
			</div>
		);
	}
}
export default StudentForm;
