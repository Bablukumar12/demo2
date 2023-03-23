import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CoursePage from "./coursePage";
import Lecture from "./lecture";
import NavBar from "./navbar";
import Welcome from "./welcome";

class MainComponent extends Component {
	state = {
		courses: ["React", "Angular", "Javascript"],
		lectures: [
			{ course: "React", id: 1, topic: "Component Lifecycle" },
			{ course: "Angular", id: 2, topic: "Dependency Injection" },
			{ course: "Javascript", id: 3, topic: "Closures" },
			{ course: "React", id: 4, topic: "Forms" },
			{ course: "Angular", id: 5, topic: "Routing" },
			{ course: "Javascript", id: 6, topic: "Prototypes" },
			{ course: "React", id: 7, topic: "Hooks" },
			{ course: "Angular", id: 8, topic: "Observables" },
			{ course: "Javascript", id: 9, topic: "Async/Await" },
			{ course: "React", id: 10, topic: "Server-side Rendering" },
			{ course: "Angular", id: 11, topic: "Forms" },
			{ course: "Javascript", id: 12, topic: "Promises" },
			{ course: "React", id: 13, topic: "Context" },
			{ course: "Angular", id: 14, topic: "Directives" },
			{ course: "Javascript", id: 15, topic: "ES6 Features" },
			{ course: "React", id: 16, topic: "State Management" },
			{ course: "Angular", id: 17, topic: "Services" },
			{ course: "Javascript", id: 18, topic: "Array Methods" },
			{ course: "React", id: 19, topic: "React Native" },
			{ course: "Angular", id: 20, topic: "Testing" },
		],
	};
	render() {
		const { lectures } = this.state;
		return (
			<div className="container">
				<NavBar />
				<Switch>
					<Route
						path="/course/:courseName"
						render={(props) => <CoursePage {...props} lectures={lectures} />}
					/>
					<Route
						path="/lecture/:courseName/:lecId"
						render={(props) => <Lecture {...props} lectures={lectures} />}
					/>

					<Route
						path="/stores"
						render={(props) => <CoursePage {...props} lectures={lectures} />}
					/>
					<Route path="/welcome" component={Welcome} />
					<Redirect from="/" to="/welcome" />
				</Switch>
			</div>
		);
	}
}
export default MainComponent;
