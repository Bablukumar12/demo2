import React,{Component} from "react";
class Task2 extends Component {
    state = {employee: {name: "Steve Martin",company: "Google",department: "Technology",designation: "Senior Developer"}};

    show =()=>{
        let {name,company,department,designation} = this.state.employee;
        console.log('Name:',name,'company:',company,'departmen:',department,'designation:',designation)
        return <React.Fragment>
        Name : {name} <br />
        Company : {company} <br />
        Department : {department} <br />
        Designation : {designation}
        </React.Fragment>
    }
    render(){
        
        return <React.Fragment>
            {this.show()}
        </React.Fragment>
    }
}
export default Task2;