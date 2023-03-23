import React, { Component } from "react";
class Mobiles extends Component {
	state = {
		rams: ["3GB", "4GB", "6GB"],
		roms: ["32GB", "64GB", "128GB"],
		prices: ["Below 10,000", "10,000 or More"],
		selRams: [],
		selRoms: [],
		selPrice: "",
	};
	handleChange = (e) => {
		let s1 = { ...this.state };
		let { currentTarget: input } = e;
		input.type === "checkbox"
			? (s1[input.name] = this.updateCBs(s1[input.name],input.checked,input.value))
			: input.type === "radio"
			? (s1.selPrice = input.value)
			: console.log("");
        this.props.history.push(`/mobiles?ram=${s1.selRams.join(",")}&rom=${s1.selRoms.join(",")}&price=${s1.selPrice}`)
		this.setState(s1);
	};
	updateCBs = (arr, checked, selValue) =>
		checked ? [...arr,selValue] : arr.filter((a => a !== selValue));

	render() {
		let { rams, roms, prices, selRams, selRoms, selPrice } = this.state;
        let {mobiles} = this.props;
        const {mobile} = this.props.match.params;
        const mobiles1 = mobile ? mobiles.filter(m=>m.brand===mobile) : mobiles;
        const mobiles2 = selRams.length >0 ? mobiles1.filter(m=>selRams.findIndex(s=>s===m.RAM)>=0) : mobiles1;
        const mobiles3 = selRoms.length >0 ? mobiles2.filter(m=>selRoms.findIndex(s=>s===m.ROM)>=0) : mobiles2;
        const mobiles4 = selPrice && selPrice==="Below 10,000" ? mobiles3.filter(m=>m.price<10000) : selPrice ? mobiles3.filter(m=>m.price>=10000) : mobiles3;
 
		return (
			<div className="">
				<div className="row">
					<div className="col-4">
						<label htmlFor="">Choose RAM</label>
						<br />
						{rams.map((r) => (
							<React.Fragment>
								<input
									type="checkbox"
									className="form-check-inline"
									name="selRams"
									value={r}
									checked={selRams.findIndex((s) => s === r) >= 0}
									onChange={this.handleChange}
								/>
								<label htmlFor="">{r}</label> <br />
							</React.Fragment>
						))}
						<label htmlFor="">Choose ROM</label> <br />
						{roms.map((r) => (
							<React.Fragment>
								<input
									type="checkbox"
									className="form-check-inline"
									name="selRoms"
									value={r}
									checked={selRoms.findIndex((s) => s === r) >= 0}
									onChange={this.handleChange}
								/>
								<label htmlFor="">{r}</label> <br />
							</React.Fragment>
						))}
						<label htmlFor="">Desired Price</label> <br />
						{prices.map((r) => (
							<React.Fragment>
								<input
									type="radio"
									className="form-check-inline"
									name="price"
									value={r}
									onChange={this.handleChange}
								/>
								<label htmlFor="">{r}</label> <br />
							</React.Fragment>
						))}
					</div>
					<div className="col-8">
						{mobiles4.map((m) => {
							let { name, brand, RAM, ROM, price } = m;
							return (
								<div className="row border">
									<div className="col-3">{name}</div>
									<div className="col-3">{brand}</div>
									<div className="col-2">{RAM}</div>
									<div className="col-2">{ROM}</div>
									<div className="col-2">{price}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
export default Mobiles;
