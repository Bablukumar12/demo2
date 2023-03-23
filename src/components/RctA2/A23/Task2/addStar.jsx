import React, { Component } from "react";
import http from "./httpService";
class AddStar extends Component {
	state = {
		countries: [
			"India",
			"Australia",
			"Portugal",
			"Argentina",
			"Brazil",
			"France",
		],
		sports: ["Cricket", "Football"],
		name: "",
		info: "",
		dob: "",
		country: "",
		genre: "",
		errors: {},
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value }, () => {
			this.validateForm();
		});
	};

	validateForm = () => {
		let errors = {};
		let isValid = true;

		if (!this.state.name) {
			errors.name = "Please enter name.";
			isValid = false;
		}

		if (!this.state.info) {
			errors.info = "Please enter info.";
			isValid = false;
		}

		if (!this.state.dob) {
			errors.dob = "Please enter dob.";
			isValid = false;
		}

		if (!this.state.country) {
			errors.country = "Please choose country.";
			isValid = false;
		}

		if (!this.state.genre) {
			errors.genre = "Please choose genre.";
			isValid = false;
		}

		this.setState({ errors: errors });
		return isValid;
	};

	async postData(url, obj) {
		let response = await http.post(url, obj);
		console.log(response);
		this.props.history.push("/");
	}

	handleSubmit = (event) => {
		event.preventDefault();

		let s1 = { ...this.state };
		let { name, info, dob, country, genre } = s1;
		let star = {
			name: name,
			info: info,
			dob: dob,
			country: country,
			sport: genre,
		};
		console.log("star",star)
		this.postData("/sporticons/star", star);
		console.log("helo")
	};

	isFormValid = () => {
		const { errors, name, info, dob, country, genre } = this.state;
		return (
			Object.keys(errors).length === 0 &&
			name !== "" &&
			info !== "" &&
			dob !== "" &&
			country !== "" &&
			genre !== ""
		);
	};

	render() {
		const { countries, sports, name, info, dob, country, genre, errors } =
			this.state;

		return (
			<div className="container text-center my-2">
				<h4>New Sport Star</h4>

				<div className="row">
					<div className="col-3 my-2">Name</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="name"
							value={name}
							onChange={this.handleChange}
							onBlur={this.handleChange}
						/>
						{errors.name && <div className="text-danger">{errors.name}</div>}
					</div>
					<div className="col-3 my-2">Info</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="info"
							value={info}
							onChange={this.handleChange}
						/>
						{errors.info && <div className="text-danger">{errors.info}</div>}
					</div>
					<div className="col-3 my-2">DOB</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="dob"
							value={dob}
							onChange={this.handleChange}
						/>
						{errors.dob && <div className="text-danger">{errors.dob}</div>}
					</div>
					<div className="col-3 my-2">Country</div>
					<div className="col-9 my-2">
						<select
							className="form-control"
							name="country"
							value={country}
							onChange={this.handleChange}>
							<option value="">Select Country</option>
							{countries.map((c, i) => (
								<option key={i} value={c}>
									{c}
								</option>
							))}
						</select>
						{errors.country && (
							<div className="text-danger">{errors.country}</div>
						)}
					</div>
					<div className="col-3 my-2">Genre</div>
					<div className="col-9 my-2">
						<select
							className="form-control"
							name="genre"
							value={genre}
							onChange={this.handleChange}>
							<option value="">Select Sport</option>
							{sports.map((c, i) => (
								<option key={i} value={c}>
									{c}
								</option>
							))}
						</select>
						{errors.genre && <div className="text-danger">{errors.genre}</div>}
					</div>
					<div className="col-12 my-4">
						<button
							className="btn btn-primary"
							onClick={this.handleSubmit}
							disabled={!this.isFormValid()}>
							Create
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default AddStar;
