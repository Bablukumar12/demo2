import React,{Component} from "react";
class Counter extends Component {
    
    render(){
        let {counter,onDelete,onIncrement}=this.props;
        let {id,alphabet,count} = counter;
        return <React.Fragment>
             alphabet={alphabet} Count={count}
            <button className="btn btn-primary btn-sm m-2" onClick={()=>onIncrement(id)}>Increase</button>
            <button className="btn btn-danger btn-sm m-2" onClick={()=>onDelete(id)}>Delete</button>
            <br />
        </React.Fragment>
    }
}
export default Counter;