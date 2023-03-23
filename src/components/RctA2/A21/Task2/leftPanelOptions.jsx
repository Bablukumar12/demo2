import React,{Component} from "react";
class LeftPanelOptions extends Component {
    state ={
        dept: "",
        designation: "",
    }
    handleChange =(e)=>{
        let s1={...this.state};
        let {currentTarget: input} = e;
        s1[input.name] = input.value;
        let dept = input.name==="dept" ? input.value : s1.dept;
        let designation= input.name==="designation" ? input.value : s1.designation;
        console.log(this.props.history)
        this.props.history.push(`/emps/1?dept=${dept}&designation=${designation}`)
        this.setState(s1);
    }
    render(){
        const depts = this.props.emps.reduce((a,c)=>a.includes(c.dept) ? a : [...a,c.dept] ,[]);
        const designations = this.props.emps.reduce((a,c)=>a.includes(c.designation)? a:[...a,c.designation],[]);
        return <div className="form-group">
            <label htmlFor="">Dept</label>
            <select name="dept" id="" className="form-check" onChange={this.handleChange}>
                <option value="">Choose Dept</option>
                {depts.map(d1=><option key={d1} value={d1}>{d1}</option>)}
            </select>
            <label htmlFor="">Designation</label>
            <select name="designation" id="" className="form-check" onChange={this.handleChange}>
                <option value="">Choose Designation</option>
                {designations.map(d1=><option key={d1} value={d1}>{d1}</option>)}
            </select>
        </div>
    }
}
export default LeftPanelOptions;