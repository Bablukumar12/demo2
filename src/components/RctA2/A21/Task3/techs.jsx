import React, { Component } from "react";
class Techs extends Component {
	state = {
		selCources: [],
		selCurrentStatus: "",
		pageNumber: 1,
		resumeData: [
			{
				name: "Amit",
				course: "BTech",
				year: 2019,
				status: "Studying",
				tech: "React",
			},
			{
				name: "Praveen",
				course: "BSc",
				year: 2020,
				status: "Studying",
				tech: "Angular",
			},
			{
				name: "Namita",
				course: "MCA",
				year: 2021,
				status: "Studying",
				tech: "Android",
			},
			{
				name: "Anuradha",
				course: "MTech",
				year: 2019,
				status: "Studying",
				tech: "Android",
			},
			{
				name: "Kavita",
				course: "BCA",
				year: 2020,
				status: "Studying",
				tech: "React",
			},
			{
				name: "Manish",
				course: "BTech",
				year: 2016,
				status: "Working",
				tech: "React",
			},
			{
				name: "Gautam",
				course: "BTech",
				year: 2017,
				status: "Working",
				tech: "Angular",
			},
			{
				name: "Radhika",
				course: "MCA",
				year: 2016,
				status: "Working",
				tech: "React",
			},
			{
				name: "Charu",
				course: "MTech",
				year: 2018,
				status: "Searching",
				tech: "Android",
			},
			{
				name: "Divya",
				course: "BCA",
				year: 2019,
				status: "Preparing",
				tech: "Angular",
			},
			{
				name: "Pradeep",
				course: "BTech",
				year: 2016,
				status: "Working",
				tech: "React",
			},
			{
				name: "Siddhartha",
				course: "MCA",
				year: 2016,
				status: "Working",
				tech: "Angular",
			},
			{
				name: "Prachi",
				course: "MCA",
				year: 2016,
				status: "Searching",
				tech: "Android",
			},
			{
				name: "Charu",
				course: "MTech",
				year: 2018,
				status: "Preparing",
				tech: "React",
			},
			{
				name: "Harsh",
				course: "BSc",
				year: 2019,
				status: "Preparing",
				tech: "Angular",
			},
		],
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		let { currentTarget: input } = e;
		input.type === "checkbox" && input.checked
			? s1.selCources.push(input.value)
			: input.type === "radio"
			? (s1.selCurrentStatus = input.value)
			: console.log("");
		this.props.history.push(
			`/job/${this.props.match.params.tech}?courses=${s1.selCources.join(
				","
			)}&status=${s1.selCurrentStatus}`
		);
		this.setState(s1);
	};
	handleNext = () => {
		let s1 = { ...this.state };
		s1.pageNumber += 1;
		this.props.history.push(
			`/job/${this.props.match.params.tech}?courses=${s1.selCources.join(
				","
			)}&status=${s1.selCurrentStatus}&page=${s1.pageNumber}`
		);
		this.setState(s1);
	};
	handlePrevious = () => {
		let s1 = { ...this.state };
		s1.pageNumber -= 1;
		this.props.history.push(
			`/job/${this.props.match.params.tech}?courses=${s1.selCources.join(
				","
			)}&status=${s1.selCurrentStatus}&page=${s1.pageNumber}`
		);
		this.setState(s1);
	};
	render() {
		let { courses, currentStatuses } = this.props;
		let { selCources, selCurrentStatus, pageNumber,resumeData } = this.state;
		const { tech } = this.props.match.params;
        const resumeData1 = selCources.length>0 ? resumeData.filter(r=>selCources.findIndex(s=>s===r.course)>=0) : resumeData;
		const resumeData2 = selCurrentStatus ? resumeData1.filter(r=>r.status===selCurrentStatus): resumeData1;
		return (
			<div className="row">
				<div className="col-3">
					<label htmlFor="">Course Done</label> <br />
					{courses.map((c) => (
						<React.Fragment>
							<input
								type="checkbox"
								className="form-check-inline"
								name="course"
								value={c}
								onChange={this.handleChange}
							/>
							<label htmlFor="">{c}</label> <br />
						</React.Fragment>
					))}
					<label htmlFor="">Current Status</label> <br />
					{currentStatuses.map((c) => (
						<React.Fragment>
							<input
								type="radio"
								className="form-check-inline"
								name="currentStatus"
								value={c}
								onChange={this.handleChange}
							/>
							<label htmlFor="">{c}</label> <br />
						</React.Fragment>
					))}
				</div>
				<div className="col-9">
					Job Details <br />
					Role : {tech} <br />
					Courses Done : {selCources.join(",")} <br />
					Current Status : {selCurrentStatus} <br />
					Page Number : {pageNumber}
					{resumeData2.map(r=>{
						let {name,course,year,status,tech} = r;
						return(
							<div className="row border">
								<div className="col-3">{name}</div>
								<div className="col-2">{course}</div>
								<div className="col-2">{year}</div>
								<div className="col-3">{status}</div>
								<div className="col-2">{tech}</div>
							</div>
						)
					})}
				</div>
				<div className="row">
					<div className="col-2">
						{pageNumber !== 1 ? (
							<button
								className="btn btn-primary my-2"
								onClick={this.handlePrevious}>
								Previous
							</button>
						) : (
							""
						)}
					</div>
					<div className="col-8"></div>
					<div className="col-2">
						{pageNumber < 10 ? (
							<button
								className="btn btn-primary my-2"
								onClick={this.handleNext}>
								Next
							</button>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		);
	}
}
export default Techs;
