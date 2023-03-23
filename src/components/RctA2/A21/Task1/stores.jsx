import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

class Stores extends Component {
	state={
		location: "",
	}
	handleChange =(e)=>{
		let s1 ={...this.state};
		let {currentTarget: input} =e;
		s1[input.name]=input.value;
		this.props.history.push(`/stores?location=${input.value}`)
		this.setState(s1);
	}
	render() {
		const { loc, id, page } = this.props.match.params;
		const { stores } = this.props;

		const locations = stores.reduce(
			(a, c) => (a.includes(c.location) ? a : [...a, c.location]),
			[]
		  );
		  
		const queryParams = queryString.parse(this.props.location.search);
		let { location } = queryParams;
		let stores1 = loc ? stores.filter((s) => s.location === loc) : stores;
		let pageNum = +page;
		let size = 4;
		let startIndex = (pageNum - 1) * size;
		let endIndex =
			stores1.length > startIndex + size - 1
				? startIndex + size - 1
				: stores1.length - 1;

		let stores2 =
			stores1.length > 4 && pageNum
				? stores1.filter(
						(lt, index) => index >= startIndex && index <= endIndex
				  )
				: stores1;
		let stores3 = location
			? stores2.filter((lt) => lt.location === location)
			: stores2;
		return (
			<div className="container my-2 text-center">
				<select name="location" id="" onChange={this.handleChange}>
					<option value="">Choose Location</option>
					{locations.map((l1) => (
						<option key={l1} value={l1}>{l1}</option>
					))}
				</select>
				<div className="row bg-dark text-white ">
					<div className="col-1 border">Id</div>
					<div className="col-3 border">Location</div>
					<div className="col-4 border">Email</div>
					<div className="col-4 border">Mobile</div>
				</div>
				{stores3.map((s1,index) => {
					let { id, location, email, mobile } = s1;
					return (
						<div key={index} className="row">
							<div className="col-1 border">
								<Link to={`/store/${id}`}>{id}</Link>
							</div>
							{pageNum ? (
								<div className="col-3 border">
									<Link to={`/location/${location}/1`}>{location}</Link>
								</div>
							) : (
								<div className="col-3 border">
									{" "}
									<button className="btn btn-primary btn-sm ">
										<Link
											className="text-white"
											to={`/stores?location=${location}`}>
											{location}
										</Link>
									</button>
								</div>
							)}
							<div className="col-4 border">{email}</div>
							<div className="col-4 border">{mobile}</div>
						</div>
					);
				})}

				<div className="row">
					<div className="col-2">
						{startIndex > 0 ? (
							<Link to={`/stores/${pageNum - 1}`}>Prev</Link>
						) : (
							""
						)}
					</div>
					<div className="col-8"></div>
					<div className="col-2">
						{endIndex < stores1.length - 1 ? (
							<Link to={`/stores/${pageNum + 1}`}>Next</Link>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		);
	}
}
export default Stores;
