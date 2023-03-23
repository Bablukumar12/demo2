import React,{Component} from "react";
class Task3 extends Component {
    state={
        txt :"",
    }
    append=(ch)=>{
        let s1 = {...this.state};
        s1.txt += ch;
        this.setState(s1);
    }

    backSpace =()=>{
        let s1 = {...this.state};
        s1.txt = s1.txt.substring(0,s1.txt.length-1)
        this.setState(s1);
    }
    clear =()=>{
        let s1 = {...this.state};
        s1.txt = "";
        this.setState(s1);
    }
    
    render(){
        let {txt}=this.state;
        return <React.Fragment>

             <button className="btn btn-primary btn-sm m-2" onClick={()=>this.append("A")}>A</button>
             <button className="btn btn-primary btn-sm m-2" onClick={()=>this.append("B")}>B</button>
             <button className="btn btn-primary btn-sm m-2" onClick={()=>this.append("C")}>C</button>
             <button className="btn btn-primary btn-sm m-2" onClick={()=>this.append("D")}>D</button> <br />
             <button className="btn btn-primary btn-sm m-2" onClick={()=>this.backSpace()}>BackSpace</button>
             <button className="btn btn-primary btn-sm m-2" onClick={()=>this.clear()}>Clear</button>
             <br />
             <h5>Text = {txt}</h5>
        </React.Fragment>
    }
}
export default Task3;