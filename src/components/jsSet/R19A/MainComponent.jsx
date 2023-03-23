import React, { Component } from "react";
import MarkingSheetComp from "./MarkingSheetComp";
import QuestionComp from "./QuestionComp";
class MainComponent extends Component {
	state = {
		questions: this.props.questions.questions,
		currentQuestionIndex: 0,
		view: 0,
		selectedOptions: Array(this.props.numberOfQuestions).fill(-1),
		selectedOptionsArr: this.props.selectedOptionsArr,
		
	};
	handleMarkingSheet = () => {
		let s1 = { ...this.state };
		s1.view = 1;
		this.setState(s1);
	};
	handleQuestion = (index) => {
		let s1 = { ...this.state };
		s1.currentQuestionIndex = index + 1;
		this.setState(s1);
	};
	handlePreviousQuestion = (index) => {
		let s1 = { ...this.state };
		s1.currentQuestionIndex = index - 1;
		this.setState(s1);
	};
	handleClickedOption = (index) => {
		let s1 = { ...this.state };
		s1.selectedOptions[s1.currentQuestionIndex] = index;
		this.setState(s1);
	};
	showQuestion = (index)=>{
		let s1 = {...this.state};
		s1.currentQuestionIndex = index;
		s1.view = 0;
		this.setState(s1);
	}
	render() {
		let { questions, currentQuestionIndex, view, selectedOptions ,selectedOptionsArr} = this.state;
		return (
			<div className="container">
				<div className="bg-light text-center">
					<h4>
						{this.props.questions.subject} : {this.props.questions.name}
					</h4>
					<div className="d-flex justify-content-between">
						<span>Time : 5 mins</span>
						<span>Max Score : 15</span>
					</div>
				</div>
				{view === 0 ? (
					<React.Fragment>
						{" "}
						<div className="d-flex justify-content-end mt-2">
							<button
								className="btn btn-primary "
								onClick={() => this.handleMarkingSheet()}>
								View Marking Sheet
							</button>
						</div>
						<QuestionComp
							questions={questions}
							currentQuestionIndex={currentQuestionIndex}
							handleNextQuestion={this.handleQuestion}
							handlePreviousQuestion={this.handlePreviousQuestion}
							handleClickedOption={this.handleClickedOption}
							selectedOptions={!this.props.check ? selectedOptions : this.props.selectedOptionsArr[this.props.questionsIndex]}
							check ={this.props.check}
						/>
					</React.Fragment>
				) : (
					<MarkingSheetComp
						questions={questions}
						selectedOptions={selectedOptions}
						onSubmitAssignment={this.props.handleSubmittedAssignments}
						showQuestion = {this.showQuestion}
						check ={this.props.check}
						showListAssignment={this.props.showListAssignment}
						selectedOptionsArr ={selectedOptionsArr}
						currentQuestionIndex={currentQuestionIndex}
					/>
				)}
			</div>
		);
	}
}
export default MainComponent;
