import React, { Component } from "react";
class TaskR14 extends Component {
	state = {
		secA: [
			{ roll: 1, sec: "A", name: "Jack", maths: 67, eng: 71, comp: 61 },
			{ roll: 2, sec: "A", name: "Mary", maths: 79, eng: 74, comp: 51 },
			{ roll: 3, sec: "A", name: "Steve", maths: 61, eng: 78, comp: 46 },
			{ roll: 4, sec: "A", name: "Bob", maths: 75, eng: 67, comp: 68 },
			{ roll: 5, sec: "A", name: "Kathy", maths: 70, eng: 63, comp: 74 },
			{ roll: 6, sec: "A", name: "Meg", maths: 46, eng: 61, comp: 63 },
			{ roll: 7, sec: "A", name: "Tom", maths: 72, eng: 85, comp: 65 },
			{ roll: 8, sec: "A", name: "David", maths: 85, eng: 71, comp: 85 },
		],
		secB: [
			{ roll: 1, sec: "B", name: "Arthur", maths: 67, eng: 55, comp: 78 },
			{ roll: 2, sec: "B", name: "Kevin", maths: 69, eng: 64, comp: 68 },
			{ roll: 3, sec: "B", name: "Harry", maths: 61, eng: 88, comp: 80 },
			{ roll: 4, sec: "B", name: "Martin", maths: 65, eng: 60, comp: 48 },
			{ roll: 5, sec: "B", name: "Pam", maths: 80, eng: 53, comp: 54 },
			{ roll: 6, sec: "B", name: "Nicky", maths: 76, eng: 71, comp: 83 },
			{ roll: 7, sec: "B", name: "Robert", maths: 82, eng: 65, comp: 75 },
			{ roll: 8, sec: "B", name: "Susan", maths: 65, eng: 81, comp: 50 },
		],
		click: -1,
	};
	handleClick = (index) => {
		let s1 = { ...this.state };
		s1.click = index;
		this.setState(s1);
	};
	showTable = (secA, secB, click) => {
		let allSec = [...secA, ...secB];
		let arr1 = ["hell"];
		if (click == 0) {
			secA.sort(
				(a, b) => b.maths + b.eng + b.comp - (a.maths + a.eng + a.comp)
			);
			arr1 = secA;
		} else if (click == 1) {
			secB.sort(
				(a, b) => b.maths + b.eng + b.comp - (a.maths + a.eng + a.comp)
			);
			arr1 = secB;
		} else if (click === 2) {
			allSec.sort(
				(a, b) => b.maths + b.eng + b.comp - (a.maths + a.eng + a.comp)
			);
			arr1 = allSec;
		} else if (click == 3) {
			secA.sort((a, b) => a.name.localeCompare(b.name));
			arr1 = secA;
		} else if (click == 4) {
			secB.sort((a, b) => a.name.localeCompare(b.name));
			arr1 = secB;
		} else if (click == 5) {
			allSec.sort((a, b) => a.name.localeCompare(b.name));
			arr1 = allSec;
		}

		return (
			<React.Fragment>
				<div className="table">
					<div className="row bg-dark text-white border">
						<div className="col-1 border">RollNo</div>
						<div className="col-1 border">Section</div>
						<div className="col-2 border">Name</div>
						<div className="col-2 border">Maths</div>
						<div className="col-2 border">English</div>
						<div className="col-2 border">Computers</div>
						<div className="col-2 border">Total</div>
					</div>
					{arr1.map((a1) => {
						let { roll, sec, name, maths, eng, comp } = a1;
                        return <div className="row border">
						<div className="col-1 border">{roll}</div>
						<div className="col-1 border">{sec}</div>
						<div className="col-2 border">{name}</div>
						<div className="col-2 border">{maths}</div>
						<div className="col-2 border">{eng}</div>
						<div className="col-2 border">{comp}</div>
						<div className="col-2 border">{maths+eng+comp}</div>
					</div>
					})}
				</div>
			</React.Fragment>
		);
	};
	render() {
		let { secA, secB, click } = this.state;
		return (
			<React.Fragment>
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleClick(0)}>
					SecA by Total
				</button>
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleClick(1)}>
					SecB by Total
				</button>
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleClick(2)}>
					All Sec by Total
				</button>
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleClick(3)}>
					SecA by Name
				</button>
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleClick(4)}>
					SecB by Name
				</button>
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleClick(5)}>
					All Sec by Name
				</button>
				{click >= 0 ? this.showTable(secA, secB, click) : ""}
			</React.Fragment>
		);
	}
}
export default TaskR14;
