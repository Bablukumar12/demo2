import React, { Component } from "react";

class CompB extends Component {
	state = { counter: 0 };
	increment = () => {
		this.setState({ counter: this.state.counter + 1 });
	};
    componentDidMount() {
		console.log(`BBBB : componentDidMount : counter= ${this.state.counter} name=${this.props.match.params.name}`);
	}
	componentDidUpdate(prevProps, prevState) {
		console.log(`BBBB : componentDidUpdate : counter= ${this.state.counter} name=${this.props.match.params.name}`);
        if(prevProps!=this.props) this.setState({counter : 0})
	}
    componentWillUnmount() {
		console.log(`BBBB : componentWillUnmount : counter= ${this.state.counter} name=${this.props.match.params.name}`);
	}
    shouldComponentUpdate(prevProps,prevState){
        console.log(`BBBB : shouldComponentUpdate : counter= ${this.state.counter} name=${this.props.match.params.name}`);

        return true
    }
	render() {
		const { counter } = this.state;
		const { name } = this.props.match.params;
		return (
			<div className="container bg-primary text-white">
				Component BBBB <br />
				Counter : {counter}
				<button
					className="btn btn-danger btn-sm mx-3"
					onClick={() => this.increment()}>
					Increment
				</button>
                <br />
                Name : {name}
			</div>
		);
	}
}

export default CompB;
