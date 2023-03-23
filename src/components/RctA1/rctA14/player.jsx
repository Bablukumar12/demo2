import React,{Component} from "react";
class Player extends Component {
    
    render(){
        let {name,score,index,onPoint} = this.props
        return <div className="text-primary bg-light m-1"> 
        Name : {name} <br />
        Score : {score} <br />
        <button className="btn btn-success btn-sm" onClick={()=>onPoint(index)}>1 Point</button>
        </div>
    }
}
export default Player;