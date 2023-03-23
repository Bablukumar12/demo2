import React,{Component} from "react";
class Task1 extends Component {
    state = {
        students : [
            {
              "name": "John Doe",
              "age": 30,
              "skills": ["JavaScript", "React", "Node.js"],
              "email": "johndoe@example.com",
              "mobile": "+1 1234567890"
            },
            {
              "name": "Jane Doe",
              "age": 25,
              "skills": ["Python", "Django", "Data Science"],
              "email": "janedoe@example.com",
              "mobile": "+1 0987654321"
            },
            {
              "name": "Jim Smith",
              "age": 35,
              "skills": ["C++", "OpenCV", "Machine Learning"],
              "email": "jimsmith@example.com",
              "mobile": "+1 1111111111"
            }
          ],
          personIndex : -1,
          showContact : false,
          
    }
    setIndex=(index)=>{
        let s1 = {...this.state};
        s1.personIndex = index;
        s1.showContact =false;
        this.setState(s1);
    }
    showContactDetails=()=>{
       let s1 = {...this.state};
       s1.showContact = true;
       this.setState(s1);
    }
    render(){
        let {students, personIndex,showContact} = this.state;
        return <React.Fragment>
            {students.map((ele,index)=>{
                let {name,age,skills,email,mobile} = ele
                return <button className="btn btn-primary m-2" onClick={()=>this.setIndex(index)}>{name}</button>
            
            })}
            <br />
            
           {personIndex>=0? <React.Fragment>
            name : {students[personIndex].name} <br />
            age : {students[personIndex].age} <br />
            skills : {students[personIndex].skills.map(e =>(e+","))} <br />
            <button className="btn btn-primary" onClick={()=> this.showContactDetails()}>Contact Info</button>

            </React.Fragment> : ""}
            <br />
          {showContact? <React.Fragment>
            email : {students[personIndex].email} <br />
            mobile : {students[personIndex].mobile}
          </React.Fragment> : ""}
        </React.Fragment>
    }
}
export default Task1;