import React,{Component} from "react";
class Task1 extends Component {
    state={
        num :0,
    }
    add1=()=>{
        let s1 = {...this.state};
        s1.num +=  1;
        this.setState(s1);
    }
    add10=()=>{
        let s1 = {...this.state};
        s1.num +=  10;
        this.setState(s1);
    }
    add100=()=>{
        let s1 = {...this.state};
        s1.num +=  100;
        this.setState(s1);
    }
    render(){
        let {num}=this.state;
        return <React.Fragment>

             <button className="btn btn-primary btn-sm m-2" onClick={()=>this.add1()}>1</button>
             <button className="btn btn-primary btn-sm m-2" onClick={()=>this.add10()}>10</button>
             <button className="btn btn-primary btn-sm" onClick={()=>this.add100()}>100</button>
             <br />
             <h5>Number = {num}</h5>
        </React.Fragment>
    }
}
export default Task1;