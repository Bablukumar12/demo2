import React, { Component } from "react";
class QuestionForm extends Component {
	state = {
		question : this.props.question,
	};
    handleChange = (e)=>{
        let s1 = {...this.state};
        let {currentTarget : input} = e;
        s1.question[input.name] = input.value;
        this.setState(s1);
    }
    onSubmit =(question)=>{
       this.props.handleSubmit(question);
    }
	render() {
		let { question, optionA, optionB, optionC, optionD, correctOption } =
			this.state.question;
		return (
			<div className="form-group">
                <button className="btn btn-primary my-2" onClick={this.props.onHome}>Home</button> <br />
				<label htmlFor="">Question</label>
				<input
					type="text"
					className="form-control"
					name="question"
					value={question}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Option A</label>
				<input
					type="text"
					className="form-control"
					name="optionA"
					value={optionA}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Option B </label>
				<input
					type="text"
					className="form-control"
					name="optionB"
					value={optionB}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Option C</label>
				<input
					type="text"
					className="form-control"
					name="optionC"
					value={optionC}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Option D</label>
				<input
					type="text"
					className="form-control"
					name="optionD"
					value={optionD}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Correct Option</label>
				<input
					type="text"
					className="form-control"
					name="correctOption"
					value={correctOption}
					onChange={this.handleChange}
				/>

                <button className="btn btn-primary mt-2" onClick={()=>this.onSubmit(this.state.question)}>Submit</button>
			</div>
		);
	}
}
export default QuestionForm;
