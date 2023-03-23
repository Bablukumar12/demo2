import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import Techs from "./techs";
class MainComponent extends Component {
	state = {
		courses: ["BTech", "MTech", "BCA", "MCA", "BSc"],
		currentStatuses: ["Studying", "Working", "Searching", "Preparing"],
      
	};

	render() {
        let {courses,currentStatuses,selCources,selCurrentStatus} = this.state;
		return (
			<div className="container">
				<NavBar />
				<Switch>
					<Route path="/job/:tech" render={(props) => <Techs {...props} courses={courses} currentStatuses={currentStatuses}/>} />
				</Switch>
			</div>
		);
	}
}
export default MainComponent;
