import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Book from "./book";
import Books from "./books";
import NavBar from "./navbar";
import NewBook from "./newBook";
class MainComponent extends Component {
	state = {};
	render() {
		return (
			<div className="container">
				<Switch>
					<Route path="/book/new" component={NewBook} />

					<Route path="/books/:genre" component={Books} />
					<Route path="/book/:id" component={Book} />

					<Route path="/books" component={Books} />
					<Redirect from="/" to="/books" />
				</Switch>
			</div>
		);
	}
}
export default MainComponent;
