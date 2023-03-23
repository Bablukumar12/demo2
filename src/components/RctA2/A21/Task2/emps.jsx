import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import LeftPanelOptions from "./leftPanelOptions";
import LeftPanelOptionsCB from "./leftPanelOptionsCB";
class Emps extends Component {
	render() {
		const { emps } = this.props;
		const { deptName, page } = this.props.match.params;
		const emps1 = deptName ? emps.filter((e) => e.dept === deptName) : emps;
		let queryParams = queryString.parse(this.props.location.search);

		let { dept, designation } = queryParams;
		const deptArray = dept ? dept.split(",") : [];
		const designationArray = designation ? designation.split(",") : [];

		let pageNum = +page;
		let size = 4;
		let startIndex = (pageNum - 1) * size;

		let emps2 =
			designationArray.length > 0
				? emps1.filter(
						(e) => designationArray.findIndex((d) => d === e.designation) >= 0
				  )
				: emps1;
		let emps3 =
			deptArray.length > 0
				? emps2.filter((e) => deptArray.findIndex((d) => d === e.dept) >= 0)
				: emps2;
		let endIndex =
			emps3.length > startIndex + size - 1
				? startIndex + size - 1
				: emps3.length - 1;
		let emps4 =
			emps1.length > 4
				? emps3.filter((lt, index) => index >= startIndex && index <= endIndex)
				: emps3;
		let arr = emps.reduce((acc, curr) => {
			if (acc.indexOf(curr.dept) >= 0) {
			} else {
				acc.push(curr.dept);
			}
			return acc;
		}, []);
		const arr1 = [];
		let NumberOfPages = Math.ceil(emps3.length / size);
		for (let i = 1; i <= NumberOfPages; i++) {
			arr1.push(i);
		}
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-3">
					<LeftPanelOptions {...this.props} emps={emps}/>
					<br />
					<LeftPanelOptionsCB {...this.props} emps={emps}/>

					</div>
					<div className="col-9">
						<h4>
							List of Employees {deptName ? "belonging to " + deptName : ""}
						</h4>
						<h6>
							{pageNum
								? "Showing page number " +
								  pageNum +
								  " of " +
								  Math.ceil(emps3.length / size)
								: ""}
						</h6>
						<div className="table">
							{emps4.map((e) => {
								let { id, name, dept, designation } = e;
								return (
									<div key={e} className="row">
										<div className="col-3 border">
											<Link to={`/emp/${id}`}>{id}</Link>
										</div>
										<div className="col-3 border">{name}</div>
										{deptName ? "" : <div className="col-3 border">{dept}</div>}
										<div className="col-3 border">{designation}</div>
									</div>
								);
							})}
						</div>
						{deptName ? (
							<React.Fragment>
								<h4>List of departments</h4>

								<ul>
									{arr.map((a) => (
										<li key={a}>
											<Link to={`/emps/dept/${a}`}>{a}</Link>
										</li>
									))}
								</ul>
							</React.Fragment>
						) : (
							""
						)}

						<div className="row">
							<div className="col-8"></div>
							<div className="col-4">
								{dept || designation
									? arr1.map((a) =>
											a === pageNum ? (
												a
											) : (
												<Link key={a}
													to={`/emps/${a}?dept=${deptArray.join(
														","
													)}&designation=${designationArray.join(",")}`}>
													{a}
												</Link>
											)
									  )
									: arr1.map((a,index) =>
											a === pageNum ? a : <Link key={a} to={`/emps/${a}`}>{a}</Link>
									  )}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Emps;
