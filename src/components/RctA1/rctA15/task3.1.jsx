import React, { Component } from "react";
class Task31 extends Component {
	state = {
		courses: [],
		course: "",
		view: 0,
        editIndex : -1,
	};
	handleAddCourse = () => {
		let s1 = { ...this.state };
		s1.view = 1;
        s1.editIndex = -1;
		this.setState(s1);
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		s1.course = e.currentTarget.value;
		this.setState(s1);
	};
	handleSubmit = () => {
		let s1 = { ...this.state };
        s1.editIndex==-1?
		s1.courses.push(s1.course) : s1.courses[s1.editIndex] = s1.course;
		s1.view = 0;
		s1.course = "";
		this.setState(s1);
	};
    handleEdit =(index)=>{
        let s1 = { ...this.state };
		s1.view = 1;
        s1.editIndex = index;
        s1.course = s1.courses[index]
		this.setState(s1);
    }
	render() {
		let { courses, view, course } = this.state;
		return (
			<div className="container">
				{view === 0 ? (
					<button
						className="btn btn-primary m-2"
						onClick={() => this.handleAddCourse()}>
						Add Course
					</button>
				) : (
					<div className="form-group">
						<label htmlFor="">Add a Course</label>
						<input
							type="text"
							className="form-control"
							name="course"
							value={course}
							onChange={this.handleChange}
						/>

						<button
							className="btn btn-primary mt-1"
							onClick={() => this.handleSubmit()}>
							Submit
						</button>
					</div>
				)}
				<h5>List of Courses</h5>
				{courses.length > 0 ? (
					<ul>
						{courses.map((c1,index) => (
							<li>
								{c1} <button className="btn btn-warning btn-sm" onClick={()=>this.handleEdit(index)}>Edit</button>
							</li>
						))}
					</ul>
				) : (
					"There is ZERO Courses"
				)}
			</div>
		);
	}
}
export default Task31;
