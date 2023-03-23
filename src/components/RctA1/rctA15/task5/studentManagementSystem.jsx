import React, { Component } from "react";
import MarksForm from "./marksForm";
import StudentForm from "./studentForm";
class StudentManagementSystem extends Component {
	state = {
		students: [],
		view: 0,
		student: {
			name: "",
			course: "",
			year: "",
            totalMarks : -1,
		},
		enteredStudentIndex: -1,
        marks : {
            maths : "",
            eng : "",
            comps : "",
            science : "",
        },
	};

	handleListOfStudent = () => {
		let s1 = { ...this.state };
		s1.view = 2;
		this.setState(s1);
	};
	handleNewStudent = () => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.student = {
			name: "",
			course: "",
			year: "",
            totalMarks : -1,
		};
		this.setState(s1);
	};
	handleStudent = (student) => {
		let s1 = { ...this.state };
		s1.students.push(student);
		s1.view = 2;
		this.setState(s1);
	};
	handleEnter = (index) => {
		let s1 = { ...this.state };
		s1.enteredStudentIndex = index;
		s1.view = 3;
		this.setState(s1);
	};
    handleMarks =(marks)=>{
        let s1 = {...this.state};
        s1.students[s1.enteredStudentIndex].totalMarks = (+marks.maths)+(+marks.eng)+(+marks.comps)+(+marks.science);
        s1.view = 2;
        this.setState(s1)
        
    }
    handleEdit = (index)=>{
        let s1 = { ...this.state };
		s1.enteredStudentIndex = index;
		s1.view = 3;
		this.setState(s1);
    }
	render() {
		let { students, view, student,marks ,enteredStudentIndex} = this.state;
		return (
			<div className="container">
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleNewStudent()}>
					New Student
				</button>
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleListOfStudent()}>
					List of Students
				</button>
				{view == 0 ? (
					<h5>Welcome to the Student Management System</h5>
				) : view == 1 ? (
					<StudentForm onSubmit={this.handleStudent} student={student} />
				) : view === 2 ? (
                    <React.Fragment>
					<table className="table">
						<div className="row bg-dark text-white border">
							<div className="col-3 border">Name</div>
							<div className="col-2 border">Course</div>
							<div className="col-2 border">Year</div>
							<div className="col-3 border">Total Marks</div>
							<div className="col-2 border">Result</div>
						</div>
						{students.map((s1, index) => {
							let { name, course, year,totalMarks } = s1;
							return (
								<div className="row">
									<div className="col-3 border">{name}</div>
									<div className="col-2 border">{course}</div>
									<div className="col-2 border">{year}</div>
									<div className="col-3 border">{totalMarks===-1? "No Data" : totalMarks}</div>
									<div className="col-2 border">
										{totalMarks===-1?
                                        <button
                                        className="btn btn-info btn-sm bg-info"
                                        onClick={() => this.handleEnter(index)}>
                                        Enter
                                    </button>:
                                    <button className="btn btn-info btn-sm bg-info" onClick={()=>this.handleEdit(index)}>Edit</button> }
									</div>
								</div>
							);
						})}
					</table>
                    </React.Fragment>
				) : view === 3 ? (
                    <React.Fragment>
                        <h5>Enter marks for {students[enteredStudentIndex].name}</h5>
					<MarksForm onSubmit={this.handleMarks} marks ={marks}/>
                    </React.Fragment>
				) : (
					""
				)}
			</div>
		);
	}
}
export default StudentManagementSystem;
