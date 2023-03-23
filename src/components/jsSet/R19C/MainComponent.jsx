import React, { Component } from "react";
import QuestionForm from "./QuestionForm";
class MainComponent extends Component {
	state = {
		questions: [
			{
				id: 1,
				question: "What is the square of 9",
				optionA: "90",
				optionB: "72",
				optionC: "81",
				optionD: "99",
				correctOption: "C",
			},
			{
				id: 2,
				question: "What is the 11*16",
				optionA: "160",
				optionB: "176",
				optionC: "204",
				optionD: "166",
				correctOption: "B",
			},
			{
				id: 3,
				question: "Which of the following is not a power of 2",
				optionA: "0",
				optionB: "1",
				optionC: "2",
				optionD: "8",
				correctOption: "A",
			},
			{
				id: 4,
				question: "log 1 is equal to",
				optionA: "1",
				optionB: "10",
				optionC: "-1",
				optionD: "0",
				correctOption: "D",
			},
			{
				id: 5,
				question: "log(ab) is equal to",
				optionA: "(loga) + (logb)",
				optionB: "b(loga)",
				optionC: "a(logb)",
				optionD: "(loga)(logb)",
				correctOption: "A",
			},
			{
				id: 6,
				question: "The square root is equal to",
				optionA: "1.0",
				optionB: "1.25",
				optionC: "1.414",
				optionD: "1.462",
				correctOption: "B",
			},
			{
				id: 7,
				question: "The binary representation of 10 is",
				optionA: "0110",
				optionB: "1001",
				optionC: "1010",
				optionD: "1100",
				correctOption: "C",
			},
			{
				id: 8,
				question: "11111 in binary represents ",
				optionA: "27",
				optionB: "15",
				optionC: "41",
				optionD: "31",
				correctOption: "D",
			},
			{
				id: 9,
				question: "The absolute value of -10.5 is equal to ",
				optionA: "-10.5",
				optionB: "10.5",
				optionC: "10",
				optionD: "11",
				correctOption: "B",
			},
			{
				id: 10,
				question: "The roots of the equation of (x-2)(x+3) = 0 are",
				optionA: "2, -3",
				optionB: "2, 3",
				optionC: "-2, 3",
				optionD: "-2, -3",
				correctOption: "A",
			},
		],
		question: {
			question: "",
			optionA: "",
			optionB: "",
			optionC: "",
			optionD: "",
			correctOption: "",
		},
		view: 0,
		editIndex: -1,
		questionPaper: { questionPaperName: "", ids: [] },
		questionPapers: [],
		selectedQuestionPaperName: "",
	};
	handleSubmit = (question) => {
		let s1 = { ...this.state };
		console.log(s1.editIndex);
		s1.editIndex !== -1
			? (s1.questions[s1.editIndex] = question)
			: s1.questions.push(question);
		s1.view = 0;
		s1.editIndex = -1;
		this.setState(s1);
	};
	handleAddQuestion = () => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.editIndex = -1;
		s1.question = {
			question: "",
			optionA: "",
			optionB: "",
			optionC: "",
			optionD: "",
			correctOption: "",
		};
		this.setState(s1);
	};
	handleQuestionBank = () => {
		let s1 = { ...this.state };
		s1.view = 2;
		this.setState(s1);
	};
	handleHome = () => {
		let s1 = { ...this.state };
		s1.view = 0;
		s1.selectedQuestionPaperName="";
		this.setState(s1);
	};
	handleDelete = (index) => {
		let s1 = { ...this.state };
		s1.questions.splice(index, 1);
		this.setState(s1);
	};

	handleEdit = (index) => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.question = s1.questions[index];
		s1.editIndex = index;
		this.setState(s1);
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		let { currentTarget: input } = e;
		input.type === "checkbox"
			? s1.questionPaper.ids.push(input.value)
			: input.type === "text"
			? (s1.questionPaper[input.name] = input.value)
			: (s1[input.name] = input.value);
		this.setState(s1);
	};
	handleCreateQuestion = () => {
		let s1 = { ...this.state };
		s1.view = 3;
		s1.questionPaper = { questionPaperName: "", ids: [] };
		this.setState(s1);
	};
	handleSubmitQuestionPaper = (questionPaper) => {
		let s1 = { ...this.state };
		s1.questionPapers.push(questionPaper);
		s1.view = 0;
		this.setState(s1);
	};
	handleViewQuestionPaper = () => {
		let s1 = { ...this.state };
		s1.view = 4;
		this.setState(s1);
	};
	render() {
		let {
			questions,
			view,
			question,
			questionPaper,
			questionPapers,
			selectedQuestionPaperName,
		} = this.state;
		return (
			<div className="container">
				{view === 0 ? (
					<React.Fragment>
						<button
							className="btn btn-primary m-2"
							onClick={() => this.handleAddQuestion()}>
							Add Question
						</button>
						<button
							className="btn btn-primary m-2"
							onClick={this.handleQuestionBank}>
							Question Bank
						</button>

						<button
							className="btn btn-primary m-2"
							onClick={this.handleCreateQuestion}>
							Create Question Paper
						</button>
						<button
							className="btn btn-primary m-2"
							onClick={this.handleViewQuestionPaper}>
							View Question Paper
						</button>
					</React.Fragment>
				) : view === 1 ? (
					<QuestionForm
						question={question}
						handleSubmit={this.handleSubmit}
						onHome={this.handleHome}
					/>
				) : view === 2 ? (
					<React.Fragment>
						<button className="btn btn-primary my-2" onClick={this.handleHome}>
							Home
						</button>
						<h4>Question Bank</h4>
						{questions.length === 0
							? "No questions have been added"
							: questions.map((q1, index) => {
									let {
										question,
										optionA,
										optionB,
										optionC,
										optionD,
										correctOption,
									} = q1;
									return (
										<React.Fragment>
											Q {index + 1} . {question}{" "}
											<button
												className="btn btn-warning btn-sm mx-2"
												onClick={() => this.handleEdit(index)}>
												Edit
											</button>{" "}
											<button
												className="btn btn-warning btn-sm mx-2"
												onClick={() => this.handleDelete(index)}>
												Delete
											</button>
											<br />
											<ul>
												<li>{optionA}</li>
												<li>{optionB}</li>
												<li>{optionC}</li>
												<li>{optionD}</li>
												<li>Answer. {correctOption}</li>
											</ul>
										</React.Fragment>
									);
							  })}
					</React.Fragment>
				) : view === 3 ? (
					<React.Fragment>
						<button className="btn btn-primary my-2" onClick={this.handleHome}>
							Home
						</button>{" "}
						<br />
						<label htmlFor="">Name of Question Paper</label>
						<input
							type="text"
							className="form-control"
							name="questionPaperName"
							value={questionPaper.questionPaperName}
							onChange={this.handleChange}
						/>
						<br />
						{questions.map((q1) => (
							<React.Fragment>
								<input
									type="checkbox"
									className="form-check-inline"
									name="question"
									value={q1.id}
									onChange={this.handleChange}
								/>
								<label>{q1.question}</label> <br />
							</React.Fragment>
						))}
						<button
							className="btn btn-primary"
							onClick={() => this.handleSubmitQuestionPaper(questionPaper)}>
							Submit
						</button>
					</React.Fragment>
				) : (
					<React.Fragment>
						<button className="btn btn-primary my-2" onClick={this.handleHome}>
							Home
						</button>
						<div className="form-group">
							<select
								name="selectedQuestionPaperName"
								id=""
								className="form-control"
								onChange={this.handleChange}>
								<option selected disabled value="">
									Choose Paper
								</option>

								{questionPapers.map((q1) => (
									<option value={q1.questionPaperName}>
										{q1.questionPaperName}
									</option>
								))}
							</select>
							{selectedQuestionPaperName ? (
								<React.Fragment>
									<h4>Question Paper</h4>
									<h6>Name : {selectedQuestionPaperName}</h6>
									<ul>
										<li>
											{questionPapers
												.find(
													(q1) =>
														q1.questionPaperName === selectedQuestionPaperName
												)
												.ids.map((id,index) => {
													const question = questions.find((q) => q.id === +id);
													return(
														<li>Q {index+1}. {question.question}</li>
													)
												})}
										</li>
									</ul>
								</React.Fragment>
							) : (
								""
							)}
						</div>
					</React.Fragment>
				)}
			</div>
		);
	}
}
export default MainComponent;
