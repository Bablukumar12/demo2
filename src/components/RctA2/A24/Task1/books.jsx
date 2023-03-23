import React, { Component } from "react";
import queryString from "query-string";

import http from "./httpService";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import LeftPanelOptions from "./LeftPanelOptions";
import NavBar from "./navbar";

class Books extends Component {
	state = { data: {} };
	async fetchData() {
		const quearyParams = queryString.parse(this.props.location.search);
		const { page, newarrival, bestseller, language } = quearyParams;
		let searchStr = this.makeSearchStr(quearyParams);
		let { genre } = this.props.match.params;
		let response = genre
			? await http.get(`/booksapp/books/${genre}?${searchStr}`)
			: await http.get(`/booksapp/books?${searchStr}`);
		console.log("response",response.data);
		this.setState({ data: response.data });
	}
	makeSearchStr = (options) => {
		const { page, newarrival, bestseller, language } = options;
		let searchStr = "";
		searchStr = this.addToQuery(searchStr, "page", page);
		searchStr = this.addToQuery(searchStr, "newarrival", newarrival);
		searchStr = this.addToQuery(searchStr, "bestseller", bestseller);
		searchStr = this.addToQuery(searchStr, "language", language);
		return searchStr;
	};
	addToQuery = (str, paramName, paramValue) =>
		paramValue
			? str
				? `${str}&${paramName}=${paramValue}`
				: `${paramName}=${paramValue}`
			: str;

	componentDidMount() {
		this.fetchData();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps != this.props) this.fetchData();
	}
	handlePage = (incr) => {
		let queryParams = queryString.parse(this.props.location.search);
		let { page = "1" } = queryParams;
		let newPage = +page + incr;
		queryParams.page = newPage;
		let { genre } = this.props.match.params;
		genre
			? this.callURL(`/books/${genre}`, queryParams)
			: this.callURL("/books", queryParams);
	};

	callURL = (url, options) => {
		let searchString = this.makeSearchStr(options);
		this.props.history.push({
			pathname: url,
			search: searchString,
		});
	};
	
	render() {
		const { data } = this.state;
		const quearyParams = queryString.parse(this.props.location.search)
		const { books = [], pageInfo = {}, refineOptions = {} } = data;
		const { numOfItems, numberOfPages, pageNumber, totalItemCount } = pageInfo;
		const { efineOptions, bestseller, language, publisher } = refineOptions;
		return (
			<div className="">
				<NavBar searchStr={this.makeSearchStr(quearyParams)} {...this.props}/>
				<div className="row">
					<div className="col-3">
						<LeftPanelOptions refineOptions={refineOptions} {...this.props}/>
					</div>
					<div className="col-9">
						<h6>
							{10 * (pageNumber - 1) + 1} to{" "}
							{10 * (pageNumber - 1) + books.length} of {totalItemCount}
						</h6>
						<div className="row bg-primary">
							<div className="col-3">Title</div>
							<div className="col-3">Author</div>
							<div className="col-2">Language</div>
							<div className="col-2">Genre</div>
							<div className="col-1">Price</div>
							<div className="col-1">Bes..</div>
						</div>
						{books.map((b) => {
							let {
								bookid,
								name,
								author,
								year,
								avgrating,
								bestseller,
								blurb,
								language,
								newarrival,
								price,
								genre,
							} = b;
							return (
								<div className="row">
									<div className="col-3 border">
										<Link to={`/book/${bookid}`}>{name}</Link>
									</div>
									<div className="col-3 border">{author}</div>
									<div className="col-2 border">{language}</div>
									<div className="col-2 border">{genre}</div>
									<div className="col-1 border">{price}</div>
									<div className="col-1 border">{bestseller}</div>
								</div>
							);
						})}
						<div className="row my-3">
							<div className="col-2">
								{pageNumber > 1 ? (
									<button
										className="btn btn-primary"
										onClick={() => this.handlePage(-1)}>
										Prev
									</button>
								) : (
									""
								)}
							</div>
							<div className="col-8"></div>
							<div className="col-2">
								{pageNumber < numberOfPages ? (
									<button
										className="btn btn-primary"
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
		);
	}
}
export default Books;
