import React, { Component } from "react";
import NavBar from "./NavBar";
import http from "./httpService";
import { Link } from "react-router-dom";

class Students extends Component {
  state = { data: [] };
  async fetchData() {
    let { course, id } = this.props.match.params;

    let response = course
      ? await http.get(`/svr/students/course/${course}`)
      : await http.get(`/svr/students/`);
    console.log(response);
    this.setState({ data: response.data });
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) this.fetchData();
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <h4>Welcome to the STUDENTS page</h4>
        {data.map((d1) => {
          let { id, name, course, grade, city } = d1;
          return (
            <div className="row">
              <div className="col-1 border">
                <Link to={`/students/${id}`}>{id}</Link>
              </div>
              <div className="col-2 border">{name}</div>
              <div className="col-2 border">{course}</div>
              <div className="col-1 border">{grade}</div>
              <div className="col-2 border">{city}</div>
              <div className="col-2 border">
                <button className="btn btn-warning btn-sm">
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/students/${id}/edit`}
                  >
                    Edit{" "}
                  </Link>{" "}
                </button>
              </div>
              <div className="col-2 border">
                <button className="btn btn-danger btn-sm">
                  <Link
                    className="text-decoration-none text-light"
                    to={`/students/${id}/delete`}
                  >
                    Delete{" "}
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Students;
