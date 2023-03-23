import React,{Component} from "react";
class Task7 extends Component{
    state={
        employees : [{name:"Jack Smith", level:2, dept:"Tech", designation:"Manager", salary:24000},{name:"Mary Robbins", level:3, dept:"Fin", designation:"Manager", salary:28000},{name:"Steve Williams", level:4, dept:"Ops", designation:"President", salary:35000},{name:"Bob Andrews", level:1, dept:"Fin", designation:"Trainee", salary:16500},{name:"Dave Martin", level:2, dept:"Fin", designation:"Manager", salary:21700},{name:"Julia Clarke", level:3, dept:"Ops", designation:"Manager", salary:26900},{name:"Kathy Jones", level:4, dept:"Tech", designation:"President", salary:42500},{name:"Tom Bresnan", level:2, dept:"Tech", designation:"Manager", salary:22200}]
    }
     
    display=(arrJSON)=>{
        const employees = [...arrJSON]
        return <div className="container"> 
        <h4 className="text-center">Welcome to the Employee Portal</h4>
        <div className="row">
      {employees.map(e=>{
        let {name,level,dept,designation,salary}=e;
        return  <div className="col-6 border text-center">
                <h5>{name}</h5> <br />
                Department : {dept} <br />
                Designation : {designation}

            </div>
       
        })}
       </div>
      <div className="row bg-warning text-center">
        <div className="col-6">
           <h5>Employee Details</h5>
           Number of employees : {employees.length} <br />
           Tech : {employees.reduce((a,c)=>(c.dept=='Tech')? a+1 :a,0)} <br />
           Fin : {employees.reduce((a,c)=>(c.dept=='Fin')? a+1 :a,0)} <br />
           Ops : {employees.reduce((a,c)=>(c.dept=='Ops')? a+1 :a,0)}
        </div>
        <div className="col-6">
            <h5>Salary Details</h5>
            Total Salary : {employees.reduce((a,c)=>a+c.salary,0)} <br />
           Average Salary : {employees.reduce((a,c)=>a+c.salary/employees.length,0)} <br />
           Max Salary : {employees.reduce((a,c)=>(c.salary>a.salary)? c :a).salary} <br />
           Min Salary : {employees.reduce((a,c)=>(c.salary<a.salary)? c :a).salary}
        
        </div>
      </div>
      </div>
    }
    render(){
        let {employees} = this.state;
        return <React.Fragment>
            <h4>Table View</h4>
            {this.display(employees)}
        </React.Fragment>
    }
}
export default Task7;