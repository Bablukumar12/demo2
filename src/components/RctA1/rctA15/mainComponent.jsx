import React, { Component } from "react";
import SimpleForm from "./simpleForm";
class MainComponent extends Component {
	state = {
		persons: [
			{ name: "Jack", age: 23 },
			{ name: "Mary", age: 20 },
		],
		view: 0,
		editPersonIndex: -1,
	};
	handlePerson = (person) => {
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
		this.setState(s1);
	};

	editPerson = (index) => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.editPersonIndex = index;
		this.setState(s1);
	};
	render() {
		let person = { name: "", age: "" };
		let { persons, view, editPersonIndex } = this.state;
		return view === 0 ? (
			<div className="container">
				{persons.map((p1, index) => (
					<div className="row">
						<div className="col-4 border">{p1.name}</div>
						<div className="col-4 border">{p1.age}</div>
						<div className="col-4 border">
						<button
							className="btn btn-warning btn-sm"
							onClick={() => this.editPerson(index)}>
							Edit
						</button>
                        </div>
					</div>
				))}
				<button className="btn btn-primary m-2" onClick={() => this.showForm()}>
					Add new Person
				</button>
			</div>
		) : (
			<SimpleForm
				person={editPersonIndex >= 0 ? persons[editPersonIndex] : person}
				onSubmit={this.handlePerson}
				edit={editPersonIndex >= 0}
			/>
		);
	}
}
export default MainComponent;
