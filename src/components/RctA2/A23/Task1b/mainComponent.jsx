import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddPerson from "./addPerson";
import NavBar from "./navbar";
import Person from "./person";
import Persons from "./persons";
import DeletePerson from "./DeletePerson";
class MainComponent extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<NavBar />
				<Switch>
					<Route path="/persons/:id/edit" component={AddPerson} />

					<Route path="/persons/:id/delete" component={DeletePerson} />

					<Route path="/persons/:id" component={Person} />
					<Route path="/persons" component={Persons} />
					<Route path="/addPerson" component={AddPerson} />

					<Redirect from="/" to="/persons" />
				</Switch>
			</div>
		);
	}
}
export default MainComponent;
