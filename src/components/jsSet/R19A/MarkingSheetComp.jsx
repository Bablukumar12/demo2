import React, { Component } from "react";
class MarkingSheetComp extends Component {
	state = {
		questions: this.props.questions,
		selectedOptions: this.props.selectedOptions,
		check: this.props.check,
		selectedOptionsArr : this.props.selectedOptionsArr,
		currentQuestionIndex : this.props.currentQuestionIndex,
	};
	render() {
		let { questions, selectedOptions, check,selectedOptionsArr,currentQuestionIndex } = this.state;
		console.log("selectedOptionsArr",selectedOptionsArr);
		return (
			<div className="container ">
				{this.state.selectedOptions.map((s1, index) => {
					let btnColor =!check && s1 != -1 ? "btn-secondary" : !check ?"btn-warning":check && questions[index].answer===1+selectedOptionsArr[currentQuestionIndex][index] ? "btn-success": check &&selectedOptionsArr[currentQuestionIndex][index]>=0 ? "btn-danger": "btn-warning";
					check ? console.log("hello",questions[index].answer,selectedOptions[currentQuestionIndex]) : console.log("")
					return (
						<React.Fragment>
							<button
								className={"btn btn-sm m-2 " + btnColor}
								onClick={() => this.props.showQuestion(index)}>
								{index + 1} {"."}
								{s1 == -1
									? ""
									: s1 == 0
									? "A"
									: s1 == 1
									? "B"
									: s1 == 2
									? "C"
									: s1 == 3
									? "D"
									: ""}
							</button>
						</React.Fragment>
					);
				})}

				<br />
				<div className="text-center mt-4">
					{!check ? (
						<button
							className="btn btn-secondary btn-sm text-center"
							onClick={() =>
								this.props.onSubmitAssignment(
									selectedOptions.reduce(
										(a, c, index) =>
											c + 1 == questions[index].answer ? a + 1 : a,
										0
									),
									selectedOptions
								)
							}>
							Submit The Assignment
						</button>
					) : (
						<button
							className="btn btn-secondary btn-sm text-center"
							onClick={this.props.showListAssignment}>
							Go to the List of Assignment 
						</button>
					)}
				</div>
			</div>
		);
	}
}
export default MarkingSheetComp;
