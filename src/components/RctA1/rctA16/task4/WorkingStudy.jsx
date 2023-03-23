import React, { Component } from "react";
class WorkingStudy extends Component {
	state = {
		working: false,
		studying: false,
		companyName: "",
		designation: "",
		collegeName: "",
		course: "",
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		let { currentTarget: input } = e;
		input.type === "checkbox"
			? (s1[input.name] = s1[input.name] ? false : true)
			: (s1[input.name] = input.value);
		this.setState(s1);
	};
	handleSubmit = () => {
		let s1 = { ...this.state };
		let { working, studying, companyName, designation, collegeName, course } =
			s1;
		let str = working
			? "Company Name: " + companyName + " Designation: " + designation
			: "";
		str += studying
			? " College Name: " + collegeName + " Course: " + course
			: "";
		alert(str);
	};
	render() {
		let { working, studying, companyName, designation, collegeName, course } =
			this.state;
		return (
			<div className="container border">
				<div className="form-group m-3">
					<h4>Provide details below</h4>
					<input
						className="form-check-inline"
						type="radio"
						name="working"
						value={working}
						checked={working}
						onChange={this.handleChange}
					/>
					<label>Working</label> <br />
					<input
						className="form-check-inline"
						type="radio"
						name="studying"
						value={studying}
						checked={studying}
						onChange={this.handleChange}
					/>
					<label>Studying</label>
					{working ? (
						<React.Fragment>
							<h4>Provide Job Details</h4>
							<label htmlFor="">Company Name</label>
							<input
								type="text"
								className="form-control"
								name="companyName"
								value={companyName}
								onChange={this.handleChange}
							/>
							<label htmlFor="">Designation</label>
							<input
								type="text"
								className="form-control"
								name="designation"
								value={designation}
								onChange={this.handleChange}
							/>{" "}
						</React.Fragment>
					) : (
						""
					)}
					{studying ? (
						<React.Fragment>
							<h4>Provide Course Details</h4>
							<label htmlFor="">College Name</label>
							<input
								type="text"
								className="form-control"
								name="collegeName"
								value={collegeName}
								onChange={this.handleChange}
							/>{" "}
							<label htmlFor="">Course</label>
							<input
								type="text"
								className="form-control"
								name="course"
								value={course}
								onChange={this.handleChange}
							/>{" "}
						</React.Fragment>
					) : (
						""
					)}{" "}
					<br />
					<button
						className="btn btn-primary mt-2"
						onClick={() => this.handleSubmit()}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}
export default WorkingStudy;
