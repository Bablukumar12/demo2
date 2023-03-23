import React, { Component } from "react";
import "./animal.css";
import croc from "./croc.svg";
import elephant from "./elephant.svg";
import giraffe from "./giraffe.svg";
import gorilla from "./gorilla.svg";
import koala from "./koala.svg";
import polar from "./polar-bear.svg";
import tiger from "./tiger.svg";
import whale from "./whale.svg";

class Game extends Component {
	state = {
		cells: [
			{
				image: croc,
				open: false,
			},
			{
				image: elephant,
				open: false,
			},
			{
				image: giraffe,
				open: false,
			},
			{
				image: gorilla,
				open: false,
			},
			{
				image: koala,
				open: false,
			},
			{
				image: polar,
				open: false,
			},
			{
				image: tiger,
				open: false,
			},
			{
				image: whale,
				open: false,
			},
			{
				image: croc,
				open: false,
			},
			{
				image: elephant,
				open: false,
			},
			{
				image: giraffe,
				open: false,
			},
			{
				image: gorilla,
				open: false,
			},
			{
				image: koala,
				open: false,
			},
			{
				image: polar,
				open: false,
			},
			{
				image: tiger,
				open: false,
			},
			{
				image: whale,
				open: false,
			},
		],
		open1: -1,
		open2: -1,
	};

	handleOpenImage = (index) => {
		let s1 = { ...this.state };
		s1.cells[index].open = true;
		s1.open1 == -1 ? (s1.open1 = index) : (s1.open2 = index);
		console.log(s1.open1, s1.open2);
		s1.open2 !== -1
			? setTimeout(() => this.doCellsMatching(s1), 1000)
			: this.setState(s1);
		this.setState(s1);
	};
	doCellsMatching = async (s1) => {
		if (s1.cells[s1.open1].image === s1.cells[s1.open2].image) {
			console.log("same");
			s1.cells[s1.open1].open = null;
			s1.cells[s1.open2].open = null;
		} else {
			console.log(s1.cells[s1.open2].image);
			s1.cells[s1.open1].open = false;
			s1.cells[s1.open2].open = false;
		}
		s1.open1 = -1;
		s1.open2 = -1;
		this.setState(s1);
	};
	handleReset = () => {
		let s1 = { ...this.state };
		s1.cells.map((c1) => (c1.open = false));
		s1.open1 = -1;
		s1.open2 = -1;
		this.setState(s1);
	};
	render() {
		let { cells, open1, open2 } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div>
						{cells.map((c1, index) => (
							<React.Fragment>
								{c1.open ? (
									<React.Fragment>
										<img src={cells[index].image} alt="dfsdfsd" />
									</React.Fragment>
								) : c1.open == null ? (
									<React.Fragment>
										<button className="btn btn-light m-1 border p-5 rounded"></button>
									</React.Fragment>
								) : (
									<React.Fragment>
										<button
											onClick={() => this.handleOpenImage(index)}
											className="btn btn-info m-1 border p-5 rounded"></button>
									</React.Fragment>
								)}
								{(index + 1) % 4 === 0 ? <br /> : ""}
							</React.Fragment>
						))}
					</div>
				</div>
				<button className="btn btn-primary m-2" onClick={() => this.handleReset()}>
					Reset Button
				</button>
			</div>
		);
	}
}
export default Game;
