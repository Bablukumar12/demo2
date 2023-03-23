import React, { Component } from "react";
import http from "./httpService";
class AddStudent extends Component {
	state = {
		student: {
			name: "",
			course: "",
			grade: "",
			city: "",
		},
		edit: false,
	};
    componentDidMount() {
		this.fetchData();
	}
	componentDidUpdate(prevProps,prevState){
		if(prevProps !==this.props) this.fetchData();
	}
	async fetchData() {
		const { id } = this.props.match.params;
		if (id) {
			let response = await http.get(`/svr/students/${id}`);
			let { data } = response;
            console.log(data)
			this.setState({ student: data, edit: true });
		} else {
			const student = { name: "", course: "", grade: "", city: "" };
			this.setState({ student: student, edit: false });
		}
	}
	handleChange = (e) => {
		const { target: input } = e;
		let s1 = { ...this.state };
		s1.student[input.name] = input.value;
		this.setState(s1);
	};
	async postData(url,obj) {
		let response = http.post(url,obj);
		console.log(response);
		this.props.history.push("/students");
	}
    async putData(url, obj) {
		let response = await http.put(url, obj);
		console.log(response);
		this.props.history.push("/students");
	}
	handleSubmit = (e) => {
        e.preventDefault();
		let { student, edit } = this.state;
		edit
			? this.putData(`/svr/students/${student.id}`, student)
			: this.postData(`/svr/students`, student);
		
		};
	render() {
		let { name, course, grade, city } = this.state.student;
        console.log(this.state.student)
		const courses = ["JS", "React", "Node", "Angular"];
		const grades = ["A", "B", "C", "D"];
		const cities = ["London", "Paris", "Mumbai", "Tokyo"];

		return (
			<div>
				<div className="form-group">
					<label htmlFor="">Student Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter name"
						name="name"
                        
                        disabled={this.state.edit}
						value={name}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="">Course</label>
					<select
						className="form-control"
						name="course"
						id=""
						value={course}
						onChange={this.handleChange}>
						<option value="">Choose Course</option>
						{courses.map((c1) => (
							<option selected={course === c1} value={c1}>
								{c1}
							</option>
						))}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="">Grade</label>
					<select
						className="form-control"
						name="grade"
						id=""
						value={grade}
						onChange={this.handleChange}>
						<option value="">Select the grade</option>
						{grades.map((c1) => (
							<option selected={c1 === grade} value={c1}>
								{c1}
							</option>
						))}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="">City</label>
					<select
						className="form-control"
						name="city"
						id=""
						value={city}
						onChange={this.handleChange}>
						<option value="">Select the city</option>
						{cities.map((c1) => (
							<option selected={c1 === city} value={c1}>
								{c1}
							</option>
						))}
					</select>
				</div>
				<button className="btn btn-primary my-2" onClick={this.handleSubmit}>
					Submit
				</button>
			</div>
		);
	}
}

export default AddStudent;
