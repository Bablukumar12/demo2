import React, { Component } from "react";
import queryString from "query-string";
class LeftPanelRadios extends Component {
	state = {
		countries: [
			"India",
			"Australia",
			"Portugal",
			"Argentina",
			"Brazil",
			"France",
		],
        selCountry : []
	};
    handleChange =(e)=>{
        let s1 = {...this.state};
        let {currentTarget :input} = e;
        s1[input.name] = this.updateCBs(s1.selCountry,input.checked,input.value);
        

        const queryParams = queryString.parse(this.props.location.search);
        queryParams.countries= this.updateCBs(s1.selCountry,input.checked,input.value).join(",");
        const {page,countries} = queryParams;
        const {sport} = this.props.match.params;
        console.log(queryParams)
       this.callURL("/stars",queryParams);
        this.setState(s1);
    }
    updateCBs =(arr,checked,value)=>
        checked
        ? [...arr,value]
        : arr.filter(a=>a!==value);
    
    callURL =(url,options)=>{
        let {page,countries} = options;
        let searchStr ="";
         searchStr = this.addToQuery(searchStr,"page",page);
         searchStr = this.addToQuery(searchStr,"countries",countries);
         

        this.props.history.push({
            path: url,
            search: searchStr,
        })
    }
    addToQuery =(str,paramName,paramValue)=>
        paramValue
        ? str 
            ? `${str}&${paramName}=${paramValue}`
            : `${paramName}=${paramValue}`
        : str;

    
	render() {
		return (
            <React.Fragment>
                Left Comp!
                <br />
                <p className="fw-bold">Options</p>

                <b className="border-top">Countries</b> <br />
                 
                 {this.state.countries.map(c=><React.Fragment>
                    <input type="checkbox" className="form-check-inline" name="selCountry" value={c} onChange={this.handleChange} checked={this.state.selCountry.findIndex(s=>s===c)>=0}/>
                    <label className="form-check-label" htmlFor="">{c}</label> <br />
                 </React.Fragment>)}

            </React.Fragment>
        )
	}
}
export default LeftPanelRadios;
