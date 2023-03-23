import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "./httpService";
import NavBar from "./NavBar";
class Student extends Component {
    state={data : {}}
	async componentDidMount() {
        let { course,id } = this.props.match.params;

		let response = await http.get(`/svr/students/${id}`);
        console.log(response)
        this.setState({data : response.data})
	}

	render() {
        const {data} = this.state;
        let {id,name,course,grade,city} = data;
		return <div>
            Student Id : {id}
            <br />
            Name : {name}
            <br />
            Course : {course}
            <br />
            Grade : {grade}
            <br />
            City : {city}
            <br />
            <Link to={`/students/${id}/delete`} >Delete</Link>
            <br />
            <Link to={`/students/${id}/edit`} >Edit</Link>
        </div>;
	}
}

export default Student;
