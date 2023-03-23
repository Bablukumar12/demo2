import React, { Component } from "react";
import Cell from "./cell";
import "./app.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cells: Array(9).fill(-1),
			nextMove: 1,
			gameOver: false,
		};
	}

	onClickHandle = (cellno) => {
		const { cells, nextMove, gameOver } = this.state;
		if (cells[cellno] !== -1 || gameOver) {
			return;
		}
		cells[cellno] = nextMove;
		this.setState({ cells: cells, nextMove: nextMove === 0 ? 1 : 0 }, () => {
			this.checkWinner();
		});
	};

	checkWinner = () => {
		const { cells } = this.state;
		const winningPositions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winningPositions.length; i++) {
			const [a, b, c] = winningPositions[i];
			if (cells[a] !== -1 &&  cells[a] === cells[b] && cells[a] === cells[c]) {
        if(cells.findIndex(c1=>c1===-1)<0)
				{this.setState({ gameOver: true });
				break;}
			}
		}
	};

	resetGame = () => {
		this.setState({
			cells: Array(9).fill(-1),
			nextMove: 0,
			gameOver: false,
		});
	};

	render() {
		const {nextMove, cells, gameOver } = this.state;
		return (
			<div className="container App">
				<h1> {gameOver ? "Game Over" : !nextMove ? "Move : 0" : "Move : X"}</h1>
				<div className="row">
					<Cell
						cellno={0}
						value={cells[0]}
						onClickHandle={this.onClickHandle}
					/>
					<Cell
						cellno={1}
						value={cells[1]}
						onClickHandle={this.onClickHandle}
					/>
					<Cell
						cellno={2}
						value={cells[2]}
						onClickHandle={this.onClickHandle}
					/>
				</div>
				<div className="row">
					<Cell
						cellno={3}
						value={cells[3]}
						onClickHandle={this.onClickHandle}
					/>
					<Cell
						cellno={4}
						value={cells[4]}
						onClickHandle={this.onClickHandle}
					/>
					<Cell
						cellno={5}
						value={cells[5]}
						onClickHandle={this.onClickHandle}
					/>
				</div>
				<div className="row">
					<Cell
						cellno={6}
						value={cells[6]}
						onClickHandle={this.onClickHandle}
					/>
					<Cell
						cellno={7}
						value={cells[7]}
						onClickHandle={this.onClickHandle}
					/>
					<Cell
						cellno={8}
						value={cells[8]}
						onClickHandle={this.onClickHandle}
					/>
				</div>
				{gameOver ? (
					<button className="btn btn-primary m-2" onClick={this.resetGame}>
          New Game
        </button>
				) : (
					<button className="btn btn-primary m-2" onClick={this.resetGame}>
						Reset Game
					</button>
				)}
			</div>
		);
	}
}

export default App;
