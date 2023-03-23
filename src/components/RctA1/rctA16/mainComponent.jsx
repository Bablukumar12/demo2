import React, { Component } from "react";
import Task611a from "./task11ai";
class MainComponent extends Component {
	state = {
		persons: [
			{
				name: "Williams",
				age: 27,
				country: "",
				gender: "Male",
				passport: true,
				license: "",
				city: "",
				passportNumber: "FDDFER112121",
				designation: "",
				techsKnown: [],
				experience: "",
				managerName: "",
				serversKnown: [],
			},
		],
		view: 0,
		editPersonIndex: -1,
	};
	handleSubmit = (person) => {
		console.log(person);
		let s1 = { ...this.state };
		s1.editPersonIndex >= 0
			? (s1.persons[s1.editPersonIndex] = person)
			: s1.persons.push(person);
		s1.view = 0;
		s1.editPersonIndex = -1;
		this.setState(s1);
	};
	showForm = () => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.editPersonIndex = -1;
		this.setState(s1);
	};
	editPerson = (index) => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.editPersonIndex = index;
		this.setState(s1);
	};
	showPersons = () => {
		return (
			<React.Fragment>
				<h4>Details of persons</h4>
				{this.state.persons.map((p1, index) => (
					<div className="row border">
						<div className="col-4 border">{p1.name}</div>
						<div className="col-4 border">{p1.age}</div>
						<div className="col-4 border">
							<button
								className="btn btn-danger btn-sm"
								onClick={() => this.deletePerson(index)}>
								Delete
							</button>
							<button
								className="btn btn-warning btn-sm "
								onClick={() => this.editPerson(index)}>
								Edit
							</button>
						</div>
					</div>
				))}
				<button className="btn btn-primary" onClick={() => this.showForm()}>
					Add New Person
				</button>
			</React.Fragment>
		);
	};
	render() {
		const { persons, view, editPersonIndex } = this.state;
		return (
			<div className="container">
				{view === 0 ? (
					this.showPersons()
				) : (
					<Task611a
						person={
							editPersonIndex >= 0
								? persons[editPersonIndex]
								: {
										name: "",
										age: "",
										country: "",
										gender: "",
										passport: false,
										license: "",
										city: "",
										passportNumber: "",
										designation: "",
										techsKnown: [],
										experience: "",
										managerName: "",
										serversKnown: [],
								  }
						}
						onSubmit={this.handleSubmit}
						edit={editPersonIndex >= 0}
					/>
				)}
			</div>
		);
	}
}
export default MainComponent;
