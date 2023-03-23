import React,{Component} from "react";
import Player from "./player";
class PlayerSystem extends Component {
    state = {
        names : [
            {
            "name": "Emma",
            "score": 100
            },
            {
            "name": "Olivia",
            "score": 95
            },
            {
            "name": "Ava",
            "score": 90
            },
            {
            "name": "Isabella",
            "score": 85
            },
            {
            "name": "Sophia",
            "score": 80
            }
            ],
    };
handlePoint =(index)=>{
    let s1 = {...this.state};
    s1.names[index].score++;
    this.setState(s1)
}
    render(){
        let {names} = this.state;
        return <div className="container">
            <h5>List of Names</h5>
            {names.map((n1,index)=><Player 
            name={n1.name} 
            score={n1.score}
            index ={index}
            onPoint = {this.handlePoint}
            />)}
            
        </div>
    }
}
export default PlayerSystem;