import React, { Component } from "react";
import { Link } from "react-router-dom";
class AddStore extends Component {
	state = {
		store: { id: "", location: "", email: "", mobile: "" },
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
        let {currentTarget:input} =e;
        console.log(input.name)
		s1.store[input.name] = input.value;
        console.log(s1.store)
		this.setState(s1);
	};
	Submit = () => {
		this.props.onSubmit(this.state.store);
	};
	render() {
		let { id, location, email, mobile } = this.state.store;
		return (
			<div className="form-group my-2">
				<label htmlFor="">Id</label>
				<input
					type="text"
					className="form-control"
					value={id}
					name="id"
					onChange={this.handleChange}
				/>
				<label htmlFor="">Location</label>
				<input
					type="text"
					className="form-control"
					value={location}
					name="location"
					onChange={this.handleChange}
				/>
				<label htmlFor="">Email</label>
				<input
					type="text"
					className="form-control"
					value={email}
					name="email"
					onChange={this.handleChange}
				/>
				<label htmlFor="">Mobile</label>
				<input
					type="text"
					className="form-control"
					value={mobile}
					name="mobile"
					onChange={this.handleChange}
				/>
				<button onClick={this.Submit} className="btn btn-primary my-2">
					<Link className="text-white" to={`/stores`}>
						Submit
					</Link>
				</button>
			</div>
		);
	}
}
export default AddStore;
