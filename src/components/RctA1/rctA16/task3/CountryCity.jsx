import React, { Component } from "react";
class CountryCities extends Component {
	state = {
		locs: [
			{
				country: "India",
				cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"],
			},
			{
				country: "USA",
				cities: [
					"Los Angeles",
					"Chicago",
					"New York",
					"Seattle",
					"Washington DC",
				],
			},
			{ country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"] },
			{ country: "Japan", cities: ["Tokyo", "Kyoto"] },
			{ country: "China", cities: ["Shanghai", "Beijing", "Shenzen"] },
		],
        country1 : "",
        city : "",
        
	};
    handleChange = (e)=>{
        let s1 = {...this.state};
        s1[e.currentTarget.name] = e.currentTarget.value;
        console.log(s1.country1);
        this.setState(s1);
    }
    handleSubmit =()=>{
        let s1 = {...this.state};
        alert("Country: " + s1.country1 + "City: " + s1.city);
    }
	render() {
        let {locs,country1,city} = this.state;
       
		return <div className="form-group container">
        <select
            name="country1"
            id="country1"
            className="form-control"
            value={country1}
            onChange={this.handleChange}>
            <option disabled selected value="">
                Select Work Experience
            </option>
            {locs.map((c1) => (
                <option>{c1.country}</option>
            ))}
        </select>
        {country1=="" ? "":<select
            name="city"
            id="city"
            className="form-control"
            value={city}
            onChange={this.handleChange}>
            <option disabled selected value="">
                Choose Cities
            </option>
            {locs.find(l1=>l1.country===country1).cities.map(c2=><option>{c2}</option>)}
        </select>}
        <button className="btn btn-primary mt-2" onClick={()=>this.handleSubmit()}>Submit</button>
    </div>
	}
}
export default CountryCities;
