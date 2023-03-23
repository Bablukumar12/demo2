import React, { Component } from "react";
class CourseForm extends Component {
	state = {
		course: this.props.course,
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		s1.course[e.currentTarget.name] = e.currentTarget.value;
		this.setState(s1);
	};
	handelSubmit = (e) => {
		e.preventDefault();
		console.log("handle submit", this.state.course);
		this.props.onSubmit(this.state.course);
	};
	render() {
		let { course } = this.state;
		let { courseName,faculty,lectures} = course;
		return (
			<div className="container">
				<h5>{this.props.edit ? "Edit Details" : "Enter Details of Course"}</h5>
				<div className="form-group">
					<label>Course Name</label>
					<input
						type="text"
						className="form-control"
						id="courseName"
						name="courseName"
						value={courseName}
						placeholder="Enter Course Name"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label>Faculty</label>
					<input
						type="text"
						className="form-control"
						id="faculty"
						name="faculty"
						value={faculty}
						placeholder="Enter Name of Faculty"
						onChange={this.handleChange}
					/>
				</div>
                <div className="form-group">
					<label>Lectures</label>
					<input
						type="text"
						className="form-control"
						id="lectures"
						name="lectures"
						value={lectures}
						placeholder="Enter Number of Lectures"
						onChange={this.handleChange}
					/>
				</div>
				<button className="btn btn-primary m-2" onClick={this.handelSubmit}>
					{this.props.edit ? "Update" : "Submit"}
				</button>
			</div>
		);
	}
}
export default CourseForm;
