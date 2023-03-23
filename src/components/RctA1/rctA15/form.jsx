import React, { Component } from "react";
class Form extends Component {
	state = {
		courses: { name: "", desc: "", duration: "", faculty: "" },
	};

	handleSubmit = () => {
		let {name,desc,duration,faculty} = this.state.courses;
		console.log("Course Details Submitted. Name : "+ name + ",Description : " + desc +",Duration : " +duration +" days" + ", Faculty :" + faculty)
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		s1.courses[e.currentTarget.name] = e.currentTarget.value;
		this.setState(s1);
	};
	render() {
		let { name, desc, duration, faculty } = this.state.courses;
		return (
			<div className="container">
				<div className="form-group">
					<label htmlFor="">Name of the Course</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter name"
						value={name}
						id="name"
						name="name"
						onChange={this.handleChange}
					/>
					<label htmlFor="">Description</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter course description"
						value={desc}
						id="desc"
						name="desc"
						onChange={this.handleChange}
					/>
					<label htmlFor="">Duration</label>
					<input
						type="number"
						className="form-control"
						placeholder="Enter course duration"
						value={duration}
						id="duration"
						name="duration"
						onChange={this.handleChange}
					/>
					<label htmlFor="">Faculty</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter faculty name"
						value={faculty}
						id="faculty"
						name="faculty"
						onChange={this.handleChange}
					/>
					<button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}
export default Form;
