import React, { Component } from "react";
class MarksForm extends Component {
	state = {
		marks: this.props.marks,
	};
    handleChange =(e)=>{
        let s1 = {...this.state};
        s1.marks[e.currentTarget.name] = e.currentTarget.value;
        this.setState(s1);
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.marks);
    }
	render() {
		let { maths, eng, comps, science } = this.state.marks;
		return (
			<form action="" className="form-group">
				<label htmlFor="">Maths</label>
				<input
					type="text"
					className="form-control"
					id="maths"
					name="maths"
					value={maths}
					onChange={this.handleChange}
				/>

				<label htmlFor="">English</label>
				<input
					type="text"
					className="form-control"
					id="eng"
					name="eng"
					value={eng}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Computers</label>
				<input
					type="text"
					className="form-control"
					id="comps"
					name="comps"
					value={comps}
					onChange={this.handleChange}
				/>

				<label htmlFor="">Science</label>
				<input
					type="text"
					className="form-control"
					id="science"
					name="science"
					value={science}
					onChange={this.handleChange}
				/>

                <br />
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
			</form>
		);
	}
}
export default MarksForm;
