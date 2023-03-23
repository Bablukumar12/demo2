import React, { Component } from "react";

class LeftPanelOptions extends Component {
	state = {
		orders: ["None", "newest", "oldest", "relevance"],
		sections: ["Business", "Technology", "Politics", "LifeStyle"],
		selOrderBy: "",
		selSection: "",
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		const { target: input } = e;
		s1[input.name] = input.value;
        console.log(input.name,input.value)
		this.setState(s1);

		input.name === "selOrderBy"
			? this.props.onOrderBy(input.value)
			: this.props.onSections(input.value);
	};
	render() {
		const { orders, sections, selOrderBy, selSection } = this.state;
		return (
			<div className="container my-4">
				<div className="row border p-2">
					<b>Order By</b>
				</div>
				<div className="row border p-2">
					<select
						name="selOrderBy"
						className="form-control"
						id=""
						value={selOrderBy}
						onChange={this.handleChange}>
						<option disabled value="">
							Order By
						</option>
						{orders.map((o) => (
							<option value={o}>{o}</option>
						))}
					</select>
				</div>
				<hr />
				<div className="row border p-2">
					<b>Sections</b>
				</div>
				{sections.map((s) => (
					<div className="row border p-2">
						<div>
							<input
								type="radio"
								className="form-check-inline"
								name="selSection"
								checked={selSection === s}
                                value={s}
								onChange={this.handleChange}
							/>
							<label htmlFor="">{s}</label>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default LeftPanelOptions;
