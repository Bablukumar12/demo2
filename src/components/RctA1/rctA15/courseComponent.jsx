import React, { Component } from "react";
import CourseForm from "./courseForm";
import SimpleForm from "./simpleForm";
import StudentForm from "./studentForm";
class CourseComponent extends Component {
	state = {
		courses: [
			{
				courseName: "Mathematics",
				faculty: "John Smith",
				lectures: 36,
				students: [],
			},
			{
				courseName: "Biology",
				faculty: "Jane Doe",
				lectures: 24,
				students: [],
			},
			{
				courseName: "History",
				faculty: "Bob Johnson",
				lectures: 48,
				students: [],
			},
		],
		view: 0,
		editCourseIndex: -1,
		viewCourseIndex: -1,
	};
	handleCourse = (course) => {
		let s1 = { ...this.state };
		s1.editCourseIndex >= 0
			? (s1.courses[s1.editCourseIndex] = course)
			: s1.courses.push(course);
		s1.view = 0;
		s1.editCourseIndex = -1;

		this.setState(s1);
	};
	showForm = () => {
		let s1 = { ...this.state };
		s1.view = 1;
		this.setState(s1);
	};

	editCourse = (index) => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.editCourseIndex = index;
		this.setState(s1);
	};

	deleteCourse = (index) => {
		let s1 = { ...this.state };
		s1.courses.splice(index, 1);
		this.setState(s1);
	};
	viewCourseDetails = (index) => {
		let s1 = { ...this.state };
		s1.view = 2;
		s1.viewCourseIndex = index;
		this.setState(s1);
	};
	showCourseDetails = () => {
		let { courses, viewCourseIndex, view } = this.state;
		let { courseName, faculty, lectures, students } = courses[viewCourseIndex];
		return (
			<div className="container">
				<h5>Course Name : {courseName}</h5>
				<h5>Faculty : {faculty}</h5>
				<h5>Number of lectures : {lectures}</h5>
				<h5>Number of students : {students.length}</h5>
				{students.length === 0 ? (
					""
				) : (
					<React.Fragment>
						{students.map((st) => (
							<div className="row">
								<div className="col-6 border">{st.id}</div>
								<div className="col-6 border">{st.name}</div>
							</div>
						))}
					</React.Fragment>
				)}
				{view === 2 ? (
					<button
						className="btn btn-primary"
						onClick={() => this.showStudentForm()}>
						Enter More Students
					</button>
				) : (
					<StudentForm student ={{}} onSubmit ={this.handleStudent} />
				)}
				<br />
				<button
					className="btn btn-primary mt-2"
					onClick={() => this.showCourseList()}>
					Show List of More Students
				</button>
			</div>
		);
	};
	showCourseList = () => {
		let s1 = { ...this.state };
		s1.view = 0;
		s1.viewCourseIndex = -1;
		this.setState(s1);
	};
	showStudentForm = () => {
		let s1 = { ...this.state };
		s1.view = 3;
		this.setState(s1);
	};
handleStudent = (student) =>{
	let s1 = {...this.state};
	s1.courses[s1.viewCourseIndex].students.push(student);
	s1.view=2;
	this.setState(s1);
}
	render() {
		let course = { courseName: "", faculty: "", lectures: "" };
		let { courses, view, editCourseIndex } = this.state;
		return view === 0 ? (
			<div className="container">
				{courses.map((p1, index) => (
					<div className="row">
						<div className="col-3 border">{p1.courseName}</div>
						<div className="col-3 border">{p1.faculty}</div>
						<div className="col-1 border">{p1.lectures}</div>
						<div
							className="col-1 border"
							onClick={() => this.viewCourseDetails(index)}>
							{p1.students.length}
						</div>
						<div className="col-4 border">
							<button
								className="btn btn-warning btn-sm"
								onClick={() => this.editCourse(index)}>
								Edit
							</button>
							<button
								className="btn btn-warning btn-sm"
								onClick={() => this.deleteCourse(index)}>
								Delete
							</button>
						</div>
					</div>
				))}
				<button className="btn btn-primary m-2" onClick={() => this.showForm()}>
					Add Course
				</button>
			</div>
		) : view === 1 ? (
			<CourseForm
				course={editCourseIndex >= 0 ? courses[editCourseIndex] : course}
				onSubmit={this.handleCourse}
				edit={editCourseIndex >= 0}
			/>
		) : view === 2 ? (
			this.showCourseDetails()
		) : (
			this.showCourseDetails()
		);
	}
}
export default CourseComponent;
