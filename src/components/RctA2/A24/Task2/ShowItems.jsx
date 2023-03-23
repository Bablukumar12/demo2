import React, { Component } from "react";
import NavBar from "./NavBar";
import queryString from "query-string";
import LeftPanelOptions from "./leftPanelOptions";

class ShowItems extends Component {
	state = {
		data: {},
		q: "",
		q1: "",
	};
	fetchData(bool= false) {
		
		const quearyParams =  queryString.parse(this.props.location.search);
        if(bool)  this.props.history.push("/home");
		const { q, page, section } = quearyParams;
		console.log(section)
		const orderBy = quearyParams["order-by"];
		fetch(
			`https://content.guardianapis.com/search?api-key=test${
				q ? "&q=" + q : ""
			}${orderBy ? "&order-by=" + orderBy : ""}${page ? "&page=" + page : ""}${
				section ? "&section=" + section : ""
			}`
		)
			.then((response) => response.json())
			.then((data) => this.setState({ data }));
	}
	componentDidMount() {
		this.fetchData(true);
	}
	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps != this.props) {
			this.fetchData();
		}
	};
	handleQ = (q) => {
		const quearyParams = queryString.parse(this.props.location.search);

		this.setState({ q: q });
		quearyParams.q = q;
		this.setState({ q1: q });
		this.callURL(`/home`, quearyParams);
	};
	callURL = (url, options) => {
		let searchString = this.makeSearchStr(options);
		this.props.history.push({
			pathname: url,
			search: searchString,
		});
	};
	makeSearchStr = (options) => {
		const { q, page, section } = options;
		const orderBy = options["order-by"];
		let searchStr = "";
		searchStr = this.addToQuery(searchStr, "q", q);
		searchStr = this.addToQuery(searchStr, "page", page);
		searchStr = this.addToQuery(searchStr, "order-by", orderBy);
		searchStr = this.addToQuery(searchStr, "section", section);

		return searchStr;
	};
	addToQuery = (str, paramName, paramValue) =>
		paramValue
			? str
				? `${str}&${paramName}=${paramValue}`
				: `${paramName}=${paramValue}`
			: str;

	handlePage = (incr) => {
		const quearyParams = queryString.parse(this.props.location.search);
		const { page = 1 } = quearyParams;
		const newPage = +page + incr;
		quearyParams.page = newPage;
		this.callURL(`/home`, quearyParams);
	};
	handleOrderBy = (orderBy) => {
		const quearyParams = queryString.parse(this.props.location.search);
		quearyParams["order-by"] = orderBy;
		this.callURL(`/home`, quearyParams);
	};

	handleSections = (selSection) => {
		const quearyParams = queryString.parse(this.props.location.search);
		quearyParams.section = selSection.toLowerCase();
		this.callURL(`/home`, quearyParams);
	};
	handleChange = (e) => {
		this.setState({ q1: e.currentTarget.value });
	};
	handleSubmit = () => {
		this.setState({ q: this.state.q1 });
		const quearyParams = queryString.parse(this.props.location.search);
		quearyParams.q = this.state.q1;
		this.callURL("/home", quearyParams);
	};
	render() {
		const quearyParams = queryString.parse(this.props.location.search);
		const { page = 1 } = quearyParams;
		const { response = {} } = this.state.data;
		const {
			results = [],
			orderBy,
			pageSize,
			pages,
			total,
			startIndex,
			currentPage,
		} = response;
		return (
			<div className="">
				<NavBar onQ={this.handleQ} />
				<div className="container">
					<div className="row">
						<div className="col-3">
							<LeftPanelOptions
								onOrderBy={this.handleOrderBy}
								onSections={this.handleSections}
							/>
						</div>
						<div className="col-9">
							<div className="row">
								<div className="col-8">
									<input
										type="text"
										className="form-control"
										name="q"
										id=""
										value={this.state.q1}
										onChange={this.handleChange}
									/>
								</div>
								<div className="col-2">
									<button className="btn btn-light" onClick={this.handleSubmit}>
										Submit
									</button>
								</div>
							</div>
							{startIndex == 0 ? (
							   "None"
							) : (
								<div>
									{" "}
									{startIndex} - {startIndex + results.length - 1} of {total}
								</div>
							)}
							<div className="row">
								{results.map((r1, index) => {
									let {
										pillarName,
										webTitle,
										sectionName,
										type,
										webPublicationDate,
									} = r1;
									return (
										<div
											className="col-3 m-1 border text-center"
											style={{ backgroundColor: "cyan" }}>
											{webTitle} <br />
											<b>
												Source : {sectionName} <br /> {webPublicationDate}
											</b>{" "}
											<br />
											<a href="https://content.guardianapis.com/search?api-key=test&q=sports">
												Preview
											</a>
										</div>
									);
								})}
							</div>
							<div className="row">
								<div className="col-2">
									{currentPage > 1 ? (
										<button
											className="btn btn-danger"
											onClick={() => this.handlePage(-1)}>
											Prev
										</button>
									) : (
										""
									)}
								</div>
								<div className="col-8"></div>
								<div className="col-2">
									{currentPage < pages ? (
										<button
											className="btn btn-danger"
											onClick={() => this.handlePage(1)}>
											Next
										</button>
									) : (
										""
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowItems;
