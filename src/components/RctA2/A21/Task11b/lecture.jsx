import React, { Component } from "react";
class Lecture extends Component {
	state = {};
	render() {
		const { lectures } = this.props;
		const { courseName, lecId } = this.props.match.params;
		let lecture = lectures.find((lect) => lect.id === +lecId);
		return (
			<React.Fragment>
				<h4>Lecture</h4>
				<h4>Id : {lecture.id}</h4>
				<h4>Course : {lecture.course}</h4>
				<h4>Topic : {lecture.topic}</h4>
			</React.Fragment>
		);
	}
}
export default Lecture;
