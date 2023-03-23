import React, { Component } from "react";
class OptionsCB extends Component {
	state = {};
	handleChange = (e) => {
		const { currentTarget: input } = e;
		let options = { ...this.props.options };
		if (input.name === "city" || input.name === "company")
			options[input.name] = this.updateCBs(
				options[input.name],
				input.checked,
				input.value
			);
		else options[input.name] = input.value;
		console.log("optionsCb", options);
		this.props.onOptionChange(options);
	};
	updateCBs = (inpValues, checked, value) => {
		let inpArr = inpValues ? inpValues.split(",") : [];
		if (checked) inpArr.push(value);
		else {
			let index = inpArr.findIndex((ele) => ele === value);
			if (index >= 0) inpArr.splice(index, 1);
		}
		console.log(inpValues, inpArr);
		return inpArr.join(",");
	};
	makeDropdown = (arr, value, name, label) => (
		<div className="form-group">
			<select
				name={name}
				id=""
				className="form-control"
				value={value}
				onChange={this.handleChange}>
				<option value="">{label}</option>
				{arr.map((opt) => (
					<option value={opt}>{opt}</option>
				))}
			</select>
		</div>
	);
	makeCheckboxes = (arr, values, name, label) => (
		<React.Fragment>
			<label className="form-check-label fw-bold" htmlFor="">
				{label}
			</label>
			{arr.map((opt) => (
				<div className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						value={opt}
						name={name}
						checked={values.find((val) => val === opt)}
						onChange={this.handleChange}
					/>

					<label className="form-check-label" htmlFor="">
						{opt}
					</label>
				</div>
			))}
		</React.Fragment>
	);
	render() {
		let { city = "", company = "", minAge = "" } = this.props.options;
		let { cities, companies, ages } = this.props;
		return (
			<div className="row border bg-light">
				<div className="col-12">
					{this.makeCheckboxes(cities, city.split(","), "city", "Select City")}
				</div>
				<div className="col-12">
					{this.makeCheckboxes(
						companies,
						company.split(","),
						"company",
						"Select Company"
					)}
				</div>
                <div className="col-12">
                    {this.makeDropdown(ages,minAge,"minAge","Select minimum Age")}
                </div>
			</div>
		);
	}
}
export default OptionsCB;
