import React, { Component } from "react";
import queryString from "query-string";

class LeftPanelOptions extends Component {
	state = {
		selBestSellers: [],
		selLanguages: [],
		languages: ["French","English", "Latin", "Other"],
	};
	handleChange = async (e) => {
        let {genre}  = this.props.match.params;
		const queryParams = queryString.parse(this.props.location.search);
		let { target: input } = e;
		let { name, value, checked } = input;
		await this.setState({ [name]: this.updateCBs(this.state[name], checked, value) });
        let s1 ={...this.state};

        queryParams.bestseller= s1.selBestSellers.length ?  s1.selBestSellers.join(",") :  "";
        queryParams.language=s1.selLanguages ? s1.selLanguages.join(",") : "";
		genre ?this.callURL(`/books/${genre}`, queryParams) : this.callURL(`/books`, queryParams);
	};

	callURL = (url, options) => {
		let searchString = this.makeSearchStr(options);
		this.props.history.push({
			pathname: url,
			search: searchString,
		});
	};
	makeSearchStr = (options) => {
		let { bestseller, language, page,newarrival } = options;
		let searchStr = "";
		searchStr = this.addToQuery(searchStr, "page", page);
		searchStr = this.addToQuery(searchStr, "bestseller", bestseller);
        searchStr = this.addToQuery(searchStr, "language", language);
        searchStr = this.addToQuery(searchStr, "newarrival", newarrival);
		return searchStr;
	};
	addToQuery = (str, paramName, paramValue) =>
		paramValue
			? str
				? `${str}&${paramName}=${paramValue}`
				: `${paramName}=${paramValue}`
			: str;

	updateCBs = (arr, checked, value) =>
		checked ? [...arr, value] : arr.filter((a) => a !== value);
	render() {
		let { selBestSellers, languages, selLanguages } = this.state;
        let {refineOptions} = this.props;
        console.log("refineOptions",refineOptions)
		return (
			<div>
				<b>Options</b>
				<hr />
				<b>BestSeller</b>
				<br />
				<div className="form-group">
					<input
						type="checkbox"
						className="form-check-inline"
						name="selBestSellers"
						value="Yes"
						onChange={this.handleChange}
						checked={selBestSellers.findIndex((s) => s === "Yes") >= 0}
					/>
					<label htmlFor="">Yes</label> ({refineOptions.bestseller ? refineOptions.bestseller[0].totalNum : ""}) <br />
					<input
						type="checkbox"
						className="form-check-inline"
						name="selBestSellers"
						value="No"
						onChange={this.handleChange}
						checked={selBestSellers.findIndex((s) => s === "No") >= 0}
					/>
					<label htmlFor="">No</label> ({refineOptions.bestseller ? refineOptions.bestseller[1].totalNum : ""})
				</div>
				<hr />
				<b>Language</b>
				<br />

				{languages.map((l,index) => (
					<>
						<input
							type="checkbox"
							className="form-check-inline"
							name="selLanguages"
							value={l}
							onChange={this.handleChange}
							checked={selLanguages.findIndex((s) => s === l) >= 0}
						/>
						<label htmlFor="">{l}</label> ({refineOptions.language ? refineOptions.language[index].totalNum : ""})  <br />{" "}
					</>
				))}
			</div>
		);
	}
}

export default LeftPanelOptions;
