import React, { Component } from "react";
import http from "./httpService";
class NewBook extends Component {
	state = {
		book: {
			name: "",
			author: "",
			description: "",
			blurb: "",
			review: "",
			price: "",
			year: "",
			publisher: "",
			avgrating: "",
			genre: "",
			language: "",
			bestseller: "",
			newarrival: "",
		},
		errors: {},
		genreis: ["Fiction", "Children", "Mystery", "Management"],
		languages: ["Latin", "English", "French", "Others"],
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		const { currentTarget: input } = e;
		let s1 = { ...this.state };
		input.type === "radio"
			? (s1.book[input.name] = input.value)
			: (s1.book[input.name] = input.value);
		this.setState(s1);
		// this.setState({ book: { ...this.state.book, [name]: value } }, () => {
		// 	this.validateForm();
		// });
		this.validateForm();
	};

	validateForm = () => {
		let errors = {};
		let isValid = true;

		if (!this.state.book.name) {
			errors.name = "Please enter name.";
			isValid = false;
		}

		if (!this.state.book.author) {
			errors.author = "Please enter author name.";
			isValid = false;
		}

		if (!this.state.book.description) {
			errors.description = "Please enter description.";
			isValid = false;
		}

		if (!this.state.book.blurb) {
			errors.blurb = "Please enter blurb.";
			isValid = false;
		}
		if (!this.state.book.review) {
			errors.review = "Please enter review.";
			isValid = false;
		}
		if (!this.state.book.price) {
			errors.price = "Please enter price.";
			isValid = false;
		}
		if (!this.state.book.year) {
			errors.year = "Please enter year.";
			isValid = false;
		}
		if (!this.state.book.publisher) {
			errors.publisher = "Please enter publisher.";
			isValid = false;
		}
		if (!this.state.book.avgrating) {
			errors.avgrating = "Please enter rating.";
			isValid = false;
		}

		if (!this.state.book.genre) {
			errors.genre = "Please choose genre.";
			isValid = false;
		}
		if (!this.state.book.language) {
			errors.language = "Please choose language.";
			isValid = false;
		}
		if (!this.state.book.bestseller) {
			errors.bestseller = "Please choose bestseller.";
			isValid = false;
		}
		if (!this.state.book.newarrival) {
			errors.newarrival = "Please choose newarrival.";
			isValid = false;
		}

		this.setState({ errors: errors });
		console.log(errors);
		return isValid;
	};

	async postData(url, obj) {
		let response = await http.post(url, obj);
		console.log(response);
		this.props.history.push("/");
	}

	handleSubmit = (event) => {
		event.preventDefault();

		let s1 = { ...this.state };

		this.postData("/booksapp/book", s1.book);
	};

	isFormValid = () => {
		const {
			name,
			author,
			description,
			blurb,
			review,
			price,
			year,
			publisher,
			avgrating,
			genre,
			language,
			bestseller,
			newarrival,
		} = this.state.book;

		return (
			Object.keys(this.state.errors).length === 0 &&
			name !== "" &&
			author !== "" &&
			description !== "" &&
			blurb !== "" &&
			review !== "" &&
			price !== "" &&
			year !== "" &&
			publisher !== "" &&
			avgrating !== "" &&
			genre !== "" &&
			language !== "" &&
			bestseller !== "" &&
			newarrival !== ""
		);
	};

	render() {
		const { book, errors } = this.state;
		const {
			name,
			author,
			description,
			blurb,
			review,
			price,
			year,
			publisher,
			avgrating,
			genre,
			language,
			bestseller,
			newarrival,
		} = book;
		const { genreis, languages } = this.state;
		return (
			<div className="container text-center my-2">
				<h4>Create a new book</h4>

				<div className="row">
					<div className="col-3 my-2">Name</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="name"
							value={name}
							onChange={this.handleChange}
							onBlur={this.handleChange}
						/>
						{errors.name && <div className="text-danger">{errors.name}</div>}
					</div>
					<div className="col-3 my-2">Author</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="author"
							value={author}
							onChange={this.handleChange}
						/>
						{errors.author && (
							<div className="text-danger">{errors.author}</div>
						)}
					</div>
					<div className="col-3 my-2">Descriptoin</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="description"
							value={description}
							onChange={this.handleChange}
						/>
						{errors.description && (
							<div className="text-danger">{errors.description}</div>
						)}
					</div>

					<div className="col-3 my-2">Blurb</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="blurb"
							value={blurb}
							onChange={this.handleChange}
						/>
						{errors.blurb && <div className="text-danger">{errors.blurb}</div>}
					</div>

					<div className="col-3 my-2">Review</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="review"
							value={review}
							onChange={this.handleChange}
						/>
						{errors.review && (
							<div className="text-danger">{errors.review}</div>
						)}
					</div>

					<div className="col-3 my-2">Price</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="price"
							value={price}
							onChange={this.handleChange}
						/>
						{errors.price && <div className="text-danger">{errors.price}</div>}
					</div>

					<div className="col-3 my-2">Year</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="year"
							value={year}
							onChange={this.handleChange}
						/>
						{errors.year && <div className="text-danger">{errors.year}</div>}
					</div>

					<div className="col-3 my-2">Publisher</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="publisher"
							value={publisher}
							onChange={this.handleChange}
						/>
						{errors.publisher && (
							<div className="text-danger">{errors.publisher}</div>
						)}
					</div>

					<div className="col-3 my-2">Rating</div>
					<div className="col-9 my-2">
						<input
							className="form-control"
							type="text"
							name="avgrating"
							value={avgrating}
							onChange={this.handleChange}
						/>
						{errors.avgrating && (
							<div className="text-danger">{errors.avgrating}</div>
						)}
					</div>

					<div className="col-3 my-2">Gerne</div>
					<div className="col-9 my-2">
						<select
							className="form-control"
							name="genre"
							value={genre}
							onChange={this.handleChange}>
							<option value="">Select Genre</option>
							{genreis.map((c, i) => (
								<option key={i} value={c}>
									{c}
								</option>
							))}
						</select>
						{errors.genre && <div className="text-danger">{errors.genre}</div>}
					</div>
					<div className="col-3 my-2">Language</div>
					<div className="col-9 my-2">
						<select
							className="form-control"
							name="language"
							value={language}
							onChange={this.handleChange}>
							<option value="">Select Language</option>
							{languages.map((c, i) => (
								<option key={i} value={c}>
									{c}
								</option>
							))}
						</select>
						{errors.language && (
							<div className="text-danger">{errors.language}</div>
						)}
					</div>

					<div className="col-3 my-2">BestSeller</div>
					<div className="col-9 my-2">
						<div className="row">
							<div className="col-6">
								<input
									className="form-check-inline"
									type="radio"
									name="bestseller"
									value="yes"
									onChange={this.handleChange}
									checked={bestseller === "yes"}
								/>
								<label htmlFor="">Yes</label>
							</div>
							<div className="col-6">
								<input
									className="form-check-inline "
									type="radio"
									name="bestseller"
									value="no"
									onChange={this.handleChange}
									checked={bestseller === "no"}
								/>
								<label htmlFor="">No</label>
							</div>
						</div>

						{errors.bestseller && (
							<div className="text-danger">{errors.bestseller}</div>
						)}
					</div>

					<div className="col-3 my-2">NewArrival</div>
					<div className="col-9 my-2">
						<div className="row">
							<div className="col-6">
								<input
									className="form-check-inline"
									type="radio"
									name="newarrival"
									value="yes"
									onChange={this.handleChange}
									checked={newarrival === "yes"}
								/>
								<label htmlFor="">Yes</label>
							</div>
							<div className="col-6">
								<input
									className="form-check-inline"
									type="radio"
									name="newarrival"
									value="no"
									onChange={this.handleChange}
									checked={newarrival === "no"}
								/>
								<label htmlFor="">No</label>
							</div>
						</div>

						{errors.newarrival && (
							<div className="text-danger">{errors.newarrival}</div>
						)}
					</div>

					<div className="col-12 my-4">
						<button
							className="btn btn-primary"
							onClick={this.handleSubmit}
							disabled={!this.isFormValid()}>
							Create
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default NewBook;
