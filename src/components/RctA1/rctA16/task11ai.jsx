import React, { Component } from "react";
class Task611a extends Component {
	state = {
		person: this.props.person,
		countries: [
			"United States of America",
			"Canada",
			"India",
			"United Kingdon",
		],
		names: [
			"Meg Smith",
			"Bill Watson",
			"Tim Gates",
			"George Cook",
			"Larry Gomes",
		],
		servers: ["Development", "Deployment", "Alpha Test", "Beta Test", "BackUp"],
		experiences: ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5+ years"],
		countryList: [
			{
				country: "United States of America",
				cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
			},
			{
				country: "Canada",
				cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa"],
			},
			{
				country: "India",
				cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"],
			},
			{
				country: "United Kingdom",
				cities: ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool"],
			},
		],
		designations: [
			"Developer",
			"Senior Developer",
			"Team Lead",
			"Architect",
			"Delivery Manager",
		],
		techs: ["React", "Javascript", "JQuery", "AngularJS"],
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		console.log(s1);
		e.currentTarget.type == "checkbox"
			? e.currentTarget.name === "techsKnown"
				? (s1.person.techsKnown = this.updateCBs(
						e.currentTarget.checked,
						e.currentTarget.value,
						s1.person.techsKnown
				  ))
				: e.currentTarget.name === "serversKnown"
				? (s1.person.serversKnown = this.updateCBs(
						e.currentTarget.checked,
						e.currentTarget.value,
						s1.person.serversKnown
				  ))
				: (s1.person[e.currentTarget.name] = e.currentTarget.checked)
			: (s1.person[e.currentTarget.name] = e.currentTarget.value);
		if (e.currentTarget.name === "country") s1.person.city = "";
		if (e.currentTarget.name === "passport") s1.person.passportNumber = "";
		this.setState(s1);
	};
	updateCBs = (checked, value, arr) => {
		console.log(arr);
		if (checked) arr.push(value);
		else {
			let index = arr.findIndex((ele) => ele === value);
			if (index >= 0) arr.splice(index, 1);
		}
		console.log(arr);
		return arr;
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.person);
	};
	render() {
		let {
			person,
			countries,
			countryList,
			designations,
			techs,
			experiences,
			names,
			servers,
		} = this.state;
		let {
			name,
			age,
			gender,
			country,
			passport,
			license,
			city,
			passportNumber,
			designation,
			techsKnown = [],
			experience,
			managerName,
			serversKnown = [],
		} = person;
		console.log(country);
		const cities = country
			? countryList.find((c1) => c1.country === country).cities
			: [];
		return (
			<div className="container">
				<h5>Enter New Details</h5>
				<div className="form-group">
					<label htmlFor="">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={name}
						placeholder="Enter Name"
						onChange={this.handleChange}
					/>
					<label htmlFor="">Age</label>
					<input
						type="text"
						className="form-control"
						id="age"
						name="age"
						value={age}
						placeholder="Enter Age"
						onChange={this.handleChange}
					/>
					<div className="form-group">
						<label htmlFor="">Country</label>
						<select
							name="country"
							id="country"
							className="form-control"
							value={country}
							onChange={this.handleChange}>
							<option disabled selected value="">
								Select the country
							</option>
							{countries.map((c1) => (
								<option>{c1}</option>
							))}
						</select>
					</div>
					{country ? (
						<div className="form-group">
							<label>City</label>
							<select
								name="city"
								id="city"
								className="form-control"
								value={city}
								onChange={this.handleChange}>
								<option disabled selected value="">
									Select the City
								</option>
								{cities.map((c1) => (
									<option>{c1}</option>
								))}
							</select>
						</div>
					) : (
						"sgsg"
					)}
					<br />
					<div className="form-check form-check-inline">
						<input
							type="radio"
							className="form-check-input"
							name="gender"
							value="Male"
							checked={gender == "Male"}
							onChange={this.handleChange}
						/>
						<label className="form-check-label">Male</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							type="radio"
							className="form-check-input"
							name="gender"
							value="Female"
							checked={gender == "Female"}
							onChange={this.handleChange}
						/>
						<label className="form-check-label">Female</label>
					</div>
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							name="passport"
							value={passport}
							checked={passport}
							onChange={this.handleChange}
						/>
						<label className="form-check-lable">Passport</label>
					</div>
					{passport ? (
						<div className="form-group">
							<label htmlFor="">Passport Number</label>
							<input
								type="text"
								className="form-control"
								id="passportNumber"
								name="passportNumber"
								value={passportNumber}
								placeholder="Enter Passport"
								onChange={this.handleChange}
							/>
						</div>
					) : (
						""
					)}
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							name="license"
							value={license}
							checked={license}
							onChange={this.handleChange}
						/>
						<label className="form-check-lable">License</label>
					</div>
					<label className="form-check-lable fw-bold">
						Choose the Designation
					</label>
					{designations.map((d1) => (
						<div className="form-check form-check-inline">
							<input
								type="radio"
								className="form-check-input"
								name="designation"
								value={d1}
								checked={designation == d1}
								onChange={this.handleChange}
							/>
							<label className="form-check-label">{d1}</label>
						</div>
					))}
					<label className="form-check-label fw-bold">
						Choose the Technologies
					</label>

					{techs.map((t1) => (
						<div className="form-check">
							<input
								type="checkbox"
								className="form-check-input"
								name="techsKnown"
								value={t1}
								checked={techsKnown.findIndex((tech) => tech === t1) >= 0}
								onChange={this.handleChange}
							/>
							<label className="form-check-lable">{t1}</label>
						</div>
					))}
					<div className="form-group">
						<label htmlFor="">Experience</label>
						<select
							name="experience"
							id="experience"
							className="form-control"
							value={experience}
							onChange={this.handleChange}>
							<option disabled selected value="">
								Select Work Experience
							</option>
							{experiences.map((c1) => (
								<option>{c1}</option>
							))}
						</select>
					</div>

					<label className="form-check-lable fw-bold">
						Choose the Manager name
					</label>
					{names.map((d1) => (
						<div className="form-check form-check-inline">
							<input
								type="radio"
								className="form-check-input"
								name="managerName"
								value={d1}
								checked={managerName == d1}
								onChange={this.handleChange}
							/>
							<label className="form-check-label">{d1}</label>
						</div>
					))}

					<label className="form-check-label fw-bold">Choose the servers</label>

					{servers.map((t1) => (
						<div className="form-check">
							<input
								type="checkbox"
								className="form-check-input"
								name="serversKnown"
								value={t1}
								checked={serversKnown.findIndex((tech) => tech === t1) >= 0}
								onChange={this.handleChange}
							/>
							<label className="form-check-lable">{t1}</label>
						</div>
					))}
					<button className="btn btn-primary" onClick={this.handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}
export default Task611a;
