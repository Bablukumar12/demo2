import React,{Component} from "react";
import Visitor from "./visitor";
class VisitorSystem extends Component {
    state = {
        visitors: [  {    "id": 1,    "name": "John Doe",    "status": "Outside"  },  {    "id": 2,    "name": "Jane Doe",    "status": "Outside"  },  {    "id": 3,    "name": "Bob Smith",    "status": "Outside"  },  {    "id": 4,    "name": "Alice Johnson",    "status": "Outside"  },  {    "id": 5,    "name": "Charlie Brown",    "status": "Outside"  },  {    "id": 6,    "name": "Emily Davis",    "status": "Outside"  },  {    "id": 7,    "name": "William Thompson",    "status": "Outside"  },  {    "id": 8,    "name": "Elizabeth Wilson",    "status": "Outside"  }],
        queue : [],

    };

getInsideCount =()=>
    this.state.visitors.reduce((a,c)=>a+(c.status==="Inside"?1:0),0);

handleEnter =(id)=>{
    let s1 = {...this.state};
    let visitor = s1.visitors.find(v=>v.id==id);
    let insideCount = this.getInsideCount();
    if(insideCount===2){
        visitor.status = "Waiting";
        s1.queue.push(visitor);
    } else visitor.status = "Inside";
    this.setState(s1)
}
handleExit =(id)=>{
    let s1 = {...this.state};
    let visitor = s1.visitors.find(v=>v.id==id);
    visitor.status = "Outside";
    if(s1.queue.length>0){
        let v1 = s1.queue.shift();
        v1.status = "Inside";
    }
    this.setState(s1)
}
handleExitQueue =(id) =>{
    let s1 = {...this.state};
    let index = s1.queue.findIndex(v=>v.id==id);
    s1.queue.splice(index,1);
    let visitor = s1.visitors.find(v=>v.id==id);
    visitor.status="Outside"
    this.setState(s1)
}
    render(){
        let {visitors,queue} = this.state;
        return <div className="container">
            <h1>Inside = {this.getInsideCount()} Queue = {queue.length} </h1>
            {visitors.map(v1=> <Visitor 
            visitor={v1} 
            onEnter={this.handleEnter} 
            onExit={this.handleExit}
            onExitQueue = {this.handleExitQueue}
            />)}
           <ul>
            {queue.map(q1=> <li>{q1.name}</li>)}
           </ul>
        </div>
    }
}
export default VisitorSystem;