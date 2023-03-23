import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import LeftPanelOptions from "./leftPanelOptions";
import LeftPanelOptionsCB from "./leftPanelOptionsCB";

class Laptops extends Component {
	filterParams = (arr, queryParams) => {
		let { brand, ram, processor, hardDisk, rating } = queryParams;
		arr = this.filterParams1(arr, "brand", brand);
		arr = this.filterParams1(arr, "ram", ram);
		arr = this.filterParams1(arr, "processor", processor);
		arr = this.filterParams1(arr, "hardDisk", hardDisk);
		arr = this.filterParams1(arr, "rating", rating);
		return arr;
	};

	filterParams1 = (arr, name, values) => {
		if (!values) return arr;
		let valuesArr = values.split(",");
		const arr1 = arr.filter((a1) => valuesArr.find((val) => val === a1[name]));
		return arr1;
	};
	addToQueryString = (str, paramName, paramValue) =>
		paramValue
			? str
				? `${str}&${paramName}=${paramValue}`
				: `${paramName}=${paramValue}`
			: str;

	makeSearchString = (options) => {
		let { brand, ram, processor, hardDisk, rating } = options;
		let searchStr = "";
		searchStr = this.addToQueryString(searchStr, "brand", brand);
		searchStr = this.addToQueryString(searchStr, "ram", ram);
		searchStr = this.addToQueryString(searchStr, "processor", processor);
		searchStr = this.addToQueryString(searchStr, "hardDisk", hardDisk);
		searchStr = this.addToQueryString(searchStr, "rating", rating);
		return searchStr;
	};

	handleOptionChange = (options) => {
		this.callURL("/all/1", options);
	};
	callURL = (url, options) => {
		let searchString = this.makeSearchString(options);
		this.props.history.push({
			pathname: url,
			search: searchString,
		});
	};
	makeAllOptions = (arr) => {
		let json = {};
		json.brand = this.getDifferentValues(arr, "brand");
		json.ram = this.getDifferentValues(arr, "ram");
		json.processor = this.getDifferentValues(arr, "processor");
		json.hardDisk = this.getDifferentValues(arr, "hardDisk");
		json.rating = this.getDifferentValues(arr, "rating");
		return json;
	};
	getDifferentValues = (arr, name) =>
		arr.reduce(
			(acc, curr) =>
				acc.find((val) => val === curr[name]) ? acc : [...acc, curr[name]],
			[]
		);

	render() {
		const { laptops } = this.props;
		const { page } = this.props.match.params;
		let queryParams = queryString.parse(this.props.location.search);
		let searchString = this.makeSearchString(queryParams);
		let pageNum = +page;
		let size = 3;
		let laptops1 = this.filterParams(laptops, queryParams);
		let startIndex = (pageNum - 1) * size;
		let endIndex =
			laptops1.length > startIndex + size - 1
				? startIndex + size - 1
				: laptops1.length - 1;
		let laptops2 =
			laptops1.length > 3
				? laptops1.filter(
						(lt, index) => index >= startIndex && index <= endIndex
				  )
				: laptops1;
		let allOptions = this.makeAllOptions(laptops);
		return (
			<div className="container">
				<div className="row">
					<div className="col-3">
						<LeftPanelOptionsCB
							allOptions={allOptions}
							options={queryParams}
							onOptionChange={this.handleOptionChange}
						/>
					</div>
					<div className="col-9">
						<h6>
							Showing {startIndex + 1} to {endIndex + 1} of {laptops1.length}
						</h6>
						<h6>Filter : {}</h6>
						<div className="row">
							{laptops2.map((lt) => (
								<div className="col-4 border bg-light" key={lt.brand}>
									Model : <Link to={`/laptop/${lt.model}`}>{lt.model}</Link>
									<br />
									Brand :{" "}
									<Link to={`/all/1?brand=${lt.brand}`}>{lt.brand}</Link>
									<br />
									RAM : <Link to={`/zll/1?ram=${lt.ram}`}>{lt.ram}</Link>
									<br />
									Processor :{" "}
									<Link to={`/all/1?processor=${lt.processor}`}>
										{lt.processor}
									</Link>
									<br />
									Hard Disk :{" "}
									<Link to={`/all/1?hardDisk=${lt.hardDisk}`}>
										{lt.hardDisk}
									</Link>
									<br />
									Rating :{" "}
									<Link to={`/all/1? nb  rating=${lt.rating}`}>
										{lt.rating}
									</Link>
									<br />
								</div>
							))}
						</div>
						<div className="row">
							<div className="col-2">
								{startIndex > 0 ? (
									<Link to={`/all/${pageNum - 1}?${searchString}`}>Prev</Link>
								) : (
									""
								)}
							</div>
							<div className="col-8"></div>
							<div className="col-2">
								{endIndex < laptops1.length - 1 ? (
									<Link to={`/all/${pageNum + 1}?${searchString}`}>Next</Link>
								) : (
									""
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Laptops;
