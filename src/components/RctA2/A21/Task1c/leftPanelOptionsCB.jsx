import React, { Component } from "react";
class LeftPanelOptionsCB extends Component {
	handleChange = (e) => {
		let { currentTarget: input } = e;
		let options = { ...this.props.options };
		options[input.name] = this.updateCBs(
			options[input.name],
			input.checked,
			input.value
		);
        this.props.onOptionChange(options);
	};
	updateCBs = (inpValue, checked, value) => {
		let inpArr = inpValue ? inpValue.split(",") : [];
		if (checked) inpArr.push(value);
		else {
			let index = inpArr.findIndex((ele) => ele === value);
			if (index >= 0) inpArr.splice(index, 1);
		}
		return inpArr.join(",");
	};
	makeCheckboxes = (arr, values, name, label) => (
		<React.Fragment>
			<label className="form-check-label font-weight-bold">{label}</label>
			{arr.map((opt) => (
				<div className="form-check" key={opt}>
					<input
						type="checkbox"
						className="form-check-input"
						value={opt}
						name={name}
						checked={values.find((val) => val === opt)|| false}
						onChange={this.handleChange}
					/>
					<label htmlFor="" className="form-check-label">
						{opt}
					</label>
				</div>
			))}
		</React.Fragment>
	);
	render() {
		let {
			brand = "",
			ram = "",
			processor = "",
			hardDisk = "",
			rating = "",
		} = this.props.options;
		let { allOptions } = this.props;

		return (
			<div className="row border bg-light">
				<div className="col-12">
					<button
						className="btn btn-primary btn-sm my-2"
						onClick={() => this.props.onOptionChange({})}>
						Clear All Options
					</button>
				</div>
				<div className="col-12">
					{this.makeCheckboxes(
						allOptions.brand,
						brand.split(","),
						"brand",
						"Select Brand"
					)}
					{this.makeCheckboxes(
						allOptions.ram,
						ram.split(","),
						"ram",
						"Select RAM"
					)}
					{this.makeCheckboxes(
						allOptions.processor,
						processor.split(","),
						"processor",
						"Select Processor"
					)}
					{this.makeCheckboxes(
						allOptions.hardDisk,
						hardDisk.split(","),
						"hardDisk",
						"Select Hard Disk"
					)}
					{this.makeCheckboxes(
						allOptions.rating,
						rating.split(","),
						"rating",
						"Select Rating"
					)}
				</div>
			</div>
		);
	}
}
export default LeftPanelOptionsCB;
