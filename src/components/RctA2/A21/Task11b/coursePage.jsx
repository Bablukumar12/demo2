import React, { Component } from "react";
import { Link } from "react-router-dom";

class CoursePage extends Component {
	state = {};
	render() {
		const { courseName } = this.props.match.params;
		let { lectures } = this.props;
		let lectures1 = courseName
			? lectures.filter((lect) => lect.course === courseName)
			: lectures;

		return (
			<React.Fragment>
				<h4>Course Name : {courseName} </h4>
				<h4>List of lectures</h4>
				<ul>
					{lectures1.map((lect) => (
						<li>Lecture id :{" "}
							<Link to={`/lecture/${courseName}/${lect.id}`}>
								{lect.id}
							</Link> {" "}
							Course : {" "}
							<Link to={`/course/${lect.course}`}>
								 {lect.topic}
							</Link>
						</li>
					))}
				</ul>
			</React.Fragment>
		);
	}
}
export default CoursePage;
