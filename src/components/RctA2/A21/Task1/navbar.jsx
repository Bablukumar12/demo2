import React,{Component} from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    state ={}
    render(){
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    MyPortal
                </Link>
                <div className="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/stores/1" className="nav-link">
                                Stores
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/addProduct" className="nav-link">
                                Add Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/stores" className="nav-link">
                                Stores
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addStore" className="nav-link">
                                Add New Store
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;