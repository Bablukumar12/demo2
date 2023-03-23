import React,{Component} from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    state ={}
    render(){
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    Courses
                </Link>
                <div className="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/course/React" className="nav-link">
                                React
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/course/Angular" className="nav-link">
                                Angular
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/course/Javascript" className="nav-link">
                                Javascipt
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/stores" className="nav-link">
                                Lectures
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;