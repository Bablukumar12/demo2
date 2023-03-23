import React, { Component } from "react";

class CompA extends Component {
	state = { counter: 0 };
	increment = () => {
		this.setState({ counter: this.state.counter + 1 });
	};
	componentDidMount() {
		console.log(`AAAA : componentDidMount : counter= ${this.state.counter}`);
	}
	componentDidUpdate(prevProps, prevState) {
		console.log(`AAAA : componentDidUpdate : counter= ${this.state.counter}`);
	}
    componentWillUnmount() {
		console.log(`AAAA : componentWillUnmount : counter= ${this.state.counter}`);
	}
    shouldComponentUpdate(prevProps,prevState){
        console.log(`AAAA : shouldComponentUpdate : counter= ${this.state.counter}`);

        return true
    }
	render() {
		const { counter } = this.state;
		console.log(`AAAA : render : counter= ${this.state.counter}`);

		return (
			<div className="container bg-warning text-dark">
				Component AAAA <br />
				Counter : {counter}
				<button
					className="btn btn-danger btn-sm mx-3"
					onClick={() => this.increment()}>
					Increment
				</button>
			</div>
		);
	}
}

export default CompA;
