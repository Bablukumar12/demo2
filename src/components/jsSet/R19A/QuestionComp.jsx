import React, { Component } from "react";
class QuestionComp extends Component {
	state = {};

	onNextQuestion = (index) => {
		this.props.handleNextQuestion(index);
	};
	onPreviousQuestion = (index) => {
		this.props.handlePreviousQuestion(index);
	};
	clickedOption = (index) => {
		this.props.handleClickedOption(index);
	};
	render() {
		let { questions, currentQuestionIndex, selectedOptions, check } =
			this.props;
		// console.log(selectedOptions)
		return (
			<React.Fragment>
				<h4>Question Number : {currentQuestionIndex + 1}</h4>
				{questions[currentQuestionIndex].text}
				<ol type="A">
					{questions[currentQuestionIndex].options.map((o1, index) => (
						<li
							style={{ cursor: "pointer" }}
							onClick={
								!this.props.check ? () => this.clickedOption(index) : null
							}>
							{o1}
						</li>
					))}
				</ol>
				Your Answer :{" "}
				{selectedOptions[currentQuestionIndex] == -1
					? "Not Answered"
					: selectedOptions[currentQuestionIndex] === 0
					? "A"
					: selectedOptions[currentQuestionIndex] === 1
					? "B"
					: selectedOptions[currentQuestionIndex] === 2
					? "C"
					: selectedOptions[currentQuestionIndex] === 3
					? "D"
					: ""}{" "}
				<br />
				{check &&
				selectedOptions[currentQuestionIndex] !== -1 &&
				questions[currentQuestionIndex].answer ===
					1 + selectedOptions[currentQuestionIndex] ? (
					<span className="text-success fw-bold">
						Correct Answer <br />
					</span>
				) : check ? (
					<span className="text-danger">
						Incorrect: The correct answer is {" "}
						{questions[currentQuestionIndex].answer===1? "A" :questions[currentQuestionIndex].answer===2? "B": questions[currentQuestionIndex].answer===3? "C" : "D"} <br />
					</span>
				) : (
					""
				)}
				{currentQuestionIndex != 0 ? (
					<button
						className="btn btn-primary m-3"
						onClick={() => this.onPreviousQuestion(currentQuestionIndex)}>
						Previous Question
					</button>
				) : (
					""
				)}
				{currentQuestionIndex != questions.length - 1 ? (
					<button
						className="btn btn-primary m-3 "
						onClick={() => this.onNextQuestion(currentQuestionIndex)}>
						Next Question
					</button>
				) : (
					""
				)}
			</React.Fragment>
		);
	}
}
export default QuestionComp;
