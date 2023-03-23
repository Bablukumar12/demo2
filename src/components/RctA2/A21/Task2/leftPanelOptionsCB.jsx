import React, { Component } from "react";
class LeftPanelOptionsCB extends Component {
	state = {
		depts1: [],
		designations1: [],
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		let { currentTarget: input } = e;
        console.log(input.name)
        input.checked &&input.name=="dept" ? s1.depts1.push(input.value) : input.checked ? s1.designations1.push(input.value) : console.log("hello");
		this.props.history.push(`/emps/1?dept=${s1.depts1.join(",")}&designation=${s1.designations1.join(",")}`);
		this.setState(s1);
	};
	render() {
		let { depts1, designations1 } = this.state;
		const depts = this.props.emps.reduce(
			(a, c) => (a.includes(c.dept) ? a : [...a, c.dept]),
			[]
		);
		const designations = this.props.emps.reduce(
			(a, c) => (a.includes(c.designation) ? a : [...a, c.designation]),
			[]
		);
		return (
			<div className="form-group">
				<label htmlFor="">Depts</label>
				<br />
				{depts.map((d) => (
					<React.Fragment key={d}>
						<input
							className="form-check-inline"
							type="checkbox"
							name="dept"
							value={d}
							checked={depts.d}
                            onChange={this.handleChange}
						/>
						<label htmlFor="">{d}</label> <br />
					</React.Fragment>
				))}
				<br />
				<label htmlFor="">Designations</label>
				<br />
				{designations.map((d) => (
					<React.Fragment key={d}>
						<input
							className="form-check-inline"
							type="checkbox"
							name="designation"
							value={d}
                            onChange={this.handleChange}

						/>
						<label htmlFor="">{d}</label> <br />
					</React.Fragment>
				))}
			</div>
		);
	}
}
export default LeftPanelOptionsCB;
