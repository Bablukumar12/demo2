import React, { Component } from "react";
import MainComponent from "./MainComponent";
class Assignment extends Component {
	state = {
		assignments: [
			{
				subject: "General Knowledge",
				name: "4A",
				questions: [
					{
						text: "What is the capital of India",
						options: ["New Delhi", "London", "Paris", "Tokyo"],
						answer: 1,
					},
					{
						text: "What is the capital of Italy",
						options: ["Berlin", "London", "Rome", "Paris"],
						answer: 3,
					},
					{
						text: "What is the capital of China",
						options: ["Shanghai", "HongKong", "Shenzen", "Beijing"],
						answer: 4,
					},
					{
						text: "What is the capital of Nepal",
						options: ["Tibet", "Kathmandu", "Colombo", "Kabul"],
						answer: 2,
					},
					{
						text: "What is the capital of Iraq",
						options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
						answer: 1,
					},
					{
						text: "What is the capital of Bangladesh",
						options: ["Teheran", "Kabul", "Colomdo", "Dhaka"],
						answer: 4,
					},
					{
						text: "What is the capital of Sri Lanka",
						options: ["Islamabad", "Colombo", "Maldives", "Dhaka"],
						answer: 2,
					},
					{
						text: "What is the capital of Saudi Arabia",
						options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
						answer: 1,
					},
					{
						text: "What is the capital of France",
						options: ["London", "New York", "Paris", "Rome"],
						answer: 3,
					},
					{
						text: "What is the capital of Germany",
						options: ["Frankfurt", "Budapest", "Prague", "Berlin"],
						answer: 4,
					},
					{
						text: "What is the capital of Sweden",
						options: ["Helsinki", "Stockholm", "Copenhagen", "Lisbon"],
						answer: 2,
					},
					{
						text: "What is the currency of UK",
						options: ["Dollar", "Mark", "Yen", "Pound"],
						answer: 4,
					},
					{
						text: "What is the height of Mount Everest",
						options: ["9231 m", "8848 m", "8027 m", "8912 m"],
						answer: 2,
					},
					{
						text: "What is the capital of Japan",
						options: ["Beijing", "Osaka", "Kyoto", "Tokyo"],
						answer: 4,
					},
					{
						text: "What is the capital of Egypt",
						options: ["Cairo", "Teheran", "Baghdad", "Dubai"],
						answer: 1,
					},
				],
			},
			{
				subject: "Maths",
				name: "10C",
				questions: [
					{
						text: "What is 8 * 9",
						options: ["72", "76", "64", "81"],
						answer: 1,
					},
					{
						text: "What is 2*3+4*5",
						options: ["70", "50", "26", "60"],
						answer: 3,
					},
				],
			},
			{
				subject: "Chemistry",
				name: "7A(i)",
				questions: [
					{
						text: "What is the melting point of ice",
						options: ["0F", "0C", "100C", "100F"],
						answer: 2,
					},
					{
						text: "What is the atomic number of Oxygen",
						options: ["6", "7", "8", "9"],
						answer: 3,
					},
					{
						text: "What is the atomic number of Carbon",
						options: ["6", "7", "8", "9"],
						answer: 1,
					},
					{
						text: "Which of these is an inert element",
						options: ["Flourine", "Suphur", "Nitrogen", "Argon"],
						answer: 4,
					},
					{
						text: "What is 0 Celsius in Fahrenheit",
						options: ["0", "32", "20", "48"],
						answer: 2,
					},
				],
			},
			{
				subject: "Computers",
				name: "3B",
				questions: [
					{
						text: "How many bytes are there in 1 kilobyte",
						options: ["16", "256", "1024", "4096"],
						answer: 3,
					},
					{
						text: "Who developed ReactJS",
						options: ["Facebook", "Google", "Microsoft", "Apple"],
						answer: 1,
					},
					{
						text: "Angular is supported by ",
						options: ["Facebook", "Google", "Microsoft", "Twitter"],
						answer: 2,
					},
					{
						text: "C# was developed by ",
						options: ["Amazon", "Google", "Microsoft", "Twitter"],
						answer: 3,
					},
					{
						text: "Bootstrap was developed by ",
						options: ["Apple", "Google", "Facebook", "Twitter"],
						answer: 4,
					},
					{
						text: "AWS is provided by ",
						options: ["Apple", "Amazon", "Microsoft", "Google"],
						answer: 2,
					},
					{
						text: "Azure is provided by ",
						options: ["Microsoft", "Amazon", "IBM", "Google"],
						answer: 1,
					},
					{
						text: "Angular is a framework that uses ",
						options: ["Java", "Python", "C#", "Typescript"],
						answer: 4,
					},
				],
			},
		],
		view: 0,
		questionsIndex: -1,
		submittedAssignments: [],
		correctAnswers : Array(4).fill(-1),
		check: false,
		selectedOptionsArr :[-1,-1,-1,-1],
	};
	handleDo = (index,check=false) => {
		let s1 = { ...this.state };
		s1.questionsIndex = index;
		s1.view = 1;
		s1.check=check;
		this.setState(s1);
	};
	
    handleSubmittedAssignments=(correctAnswers,selectedOptions)=>{
        
        let s1 = {...this.state};
        s1.submittedAssignments.push(s1.questionsIndex);
        s1.view=0;
		s1.correctAnswers[s1.questionsIndex] = correctAnswers;
		s1.check=false;
		s1.selectedOptionsArr[s1.questionsIndex]=(selectedOptions)
		console.log(s1.selectedOptionsArr)
        this.setState(s1);
    }
	handleshowListAssignment =()=>{
		let s1 ={...this.state};
		console.log("hello")
		s1.view=0;
		this.setState(s1);
	}
	render() {
		let { assignments, view, questionsIndex, submittedAssignments,correctAnswers,check ,selectedOptionsArr} =
			this.state;
		let { subject, name, questions } = assignments;

		return (
			<div className="container ">
				{view === 0 ? (
					<div className="table text-center">
						<h4>Choose the Assignment</h4>
						<div className="row bg-dark text-white border">
							<div className="col-3 border">Subject</div>
							<div className="col-2 border">Assignment</div>
							<div className="col-3 border">Performance</div>
							<div className="col-2 border"></div>
							<div className="col-2 border"></div>
						</div>
						{assignments.map((a1, index) => {
							let { subject, name ,questions} = a1;
							return (
								<div className="row">
									<div className="col-3 border">{subject}</div>
									<div className="col-2 border">{name}</div>
									<div className="col-3 border">{correctAnswers[index]===-1 ? "Not Done" : correctAnswers[index] +"/" +questions.length}</div>
									<div className="col-2 border">
										<button
											className="btn btn-primary btn-sm bg-primary m-2"
											onClick={() => this.handleDo(index)}>
											Do
										</button>
									</div>
									<div className="col-2 border">
                                        {submittedAssignments.findIndex(s1=>s1===index)>=0 ?<button className="btn btn-primary btn-sm bg-primary m-2" onClick={()=>this.handleDo(index,true)}>
											Check
										</button> : ""}
										
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<MainComponent
						questions={assignments[questionsIndex]}
						numberOfQuestions={assignments[questionsIndex].questions.length}
                        handleSubmittedAssignments={this.handleSubmittedAssignments}
						check={check}
						selectedOptionsArr={selectedOptionsArr}
						questionsIndex ={questionsIndex}
						showListAssignment ={this.handleshowListAssignment}
						
					/>
				)}
			</div>
		);
	}
}

export default Assignment;
