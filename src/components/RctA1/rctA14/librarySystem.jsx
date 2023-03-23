import React, { Component } from "react";
import Book from "./book";
class LibrarySystem extends Component {
	state = {
		books: [
			{
				name: "The Great Gatsby",
				author: "F. Scott Fitzgerald",
				issued: false,
			},
			{
				name: "To Kill a Mockingbird",
				author: "Harper Lee",
				issued: false,
			},
			{
				name: "Moby-Dick",
				author: "Herman Melville",
				issued: false,
			},
			{
				name: "Pride and Prejudice",
				author: "Jane Austen",
				issued: false,
			},
		],
		issuedBooks: [],
	};
	handleIssue = (index) => {
		let s1 = { ...this.state };
		s1.issuedBooks.push(s1.books[index]);
		s1.books[index].issued = true;
		this.setState(s1);
	};
	handleReturn = (index) => {
		let s1 = { ...this.state };
		let book = s1.books.find((b1) => b1.name == s1.issuedBooks[index].name);
		book.issued = false;
		s1.issuedBooks.splice(index, 1);
		this.setState(s1);
	};
	render() {
		let { books, issuedBooks } = this.state;
		const fbooks = books.filter((ele) => ele.issued == false);
		return (
			<div className="container">
				<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
					<span class="navbar-brand mb-0 h1">Library</span>
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="#">
								Number of books Issued : {issuedBooks.length}
							</a>
						</li>
					</ul>
				</nav>
				<h5 className="text-center">Books in Library</h5>
				{books.length === 0 ? <h6>Library is Empty</h6> : ""}
				<div className="row">
					{fbooks.map((b1, index) => (
						<Book book={b1} index={index} onIssue={this.handleIssue} />
					))}
				</div>
				<h5>Issued Books</h5>
				{issuedBooks.length === 0 ? (
					"No Book has been Issued"
				) : (
					<ul>
						{issuedBooks.map((ele, index) => (
							<li>
								{ele.name}
								<button
									className="btn btn-secondary btn-sm m-1"
									onClick={() => this.handleReturn(index)}>
									Return
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}
export default LibrarySystem;
