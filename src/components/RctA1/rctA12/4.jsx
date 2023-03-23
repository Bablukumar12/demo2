import React,{Component} from "react";
class Task extends Component{
    state = {
        student:[ 
            {name: "Bill Johnson",english: 61,maths: 55,computers: 60},
            {name: "Mary Smith",english: 75,maths: 80,computers: 82},
            {name: "Rex Williams",english: 37,maths: 32,computers: 27},
    ]
    }
    render(){
        let {student} = this.state;

        return <div className="row">
            {student.map(ele=>{
                let {name,english,maths,computers}=ele
                return (<div className="col-4">
                Name : {name} <br />
                Marks in English : {english} <br />
                Marks in Maths : {maths} <br />
                Marks in Computers : {computers} <br />
                Total Marks : {english+maths+computers} <br />
                Grade :{english+maths+computers>=225? "A" : english+maths+computers>=180? "B" : english+maths+computers>=150? "C":"D"} 
                </div>)
               
            })}


        </div>
    }
}

export default Task;