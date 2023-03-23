import React, { Component } from "react";
class LeftPanelForm extends Component {
	handleChange = (e) => {
		let s1 = { ...this.props.optionsSel };
		let { currentTarget: input } = e;
		input.name === "brand"
			? (s1.brand = [input.value])
			: input.name === "ram"
			? (s1.ram = [input.value])
			: input.name === "rating"
			? (s1.rating = this.updateCBs(input.checked,input.value,s1.rating))
			:input.name === "processor"
			? (s1.processor = this.updateCBs(input.checked,input.value,s1.processor))
			: input.name === "hardDisk"
			? (s1.harkDisk = this.updateCBs(input.checked,input.value,s1.hardDisk))
			: (s1[input.name] = input.value);
		this.props.onChangeOption(s1);
	};
	updateCBs = (checked, value, arr) => {
		if (checked) arr.push(value);
		else {
			let index = arr.findIndex((ele) => ele === value);
			if (index >= 0) arr.splice(index, 1);
		}
		return arr;
	};
	render() {
		const { optionsSel, optionsArray } = this.props;
		return (
			<div className="container">
				<h4>Choose Options</h4>
				<button className="btn btn-warning btn-sm" onClick={this.props.onClear}>
					Clear All
				</button>
				{this.showDropdowns(
					"Brand",
					optionsArray.brand,
					"brand",
					optionsSel.brand
				)}
				{this.showDropdowns("RAM", optionsArray.ram, "ram", optionsSel.ram)}
				{this.showCheckboxes(
					"Processor",
					optionsArray.processor,
					"processor",
					optionsSel.processor
				)}
				{this.showCheckboxes(
					"Ratings",
					optionsArray.rating,
					"rating",
					optionsSel.rating
				)}
				{this.showCheckboxes(
					"HardDisk",
					optionsArray.hardDisk,
					"hardDisk",
					optionsSel.hardDisk
				)}
			</div>
		);
	}

	showCheckboxes = (label, arr, name, selArr) => {
		return (
			<React.Fragment>
				<label className="form-check-label fw-bold">{label}</label>
				{arr.map((opt, index) => (
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							value={opt}
							name={name}
							checked={selArr.findIndex((sel) => sel === opt) >= 0}
							onChange={this.handleChange}
						/>
						<label htmlFor="" className="form-check-label">
							{opt}
						</label>
					</div>
				))}
			</React.Fragment>
		);
	};

	showRadios = (label, arr, name, selVal) => {
		return (
			<React.Fragment>
				<label htmlFor="" className="form-check-label fw-bold">
					{label}
				</label>
				{arr.map((opt) => (
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							name={name}
							value={opt}
							checked={selVal === opt}
							onChange={this.handleChange}
						/>
						<label htmlFor="" className="form-check-label">
							{opt}
						</label>
					</div>
				))}
			</React.Fragment>
		);
	};

	showDropdowns = (label, arr, name, selVal) => {
		return (
			<React.Fragment>
				<div className="form-group">
					<label htmlFor="">{label}</label>
					<select
						name={name}
						className="form-control"
						value={selVal}
						onChange={this.handleChange}>
						<option disabled selected value="">
							Select the Brand
						</option>
						{arr.map((c1) => (
							<option>{c1}</option>
						))}
					</select>
				</div>
			</React.Fragment>
		);
	};
}
export default LeftPanelForm;
