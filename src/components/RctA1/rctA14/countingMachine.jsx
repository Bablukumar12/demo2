import React,{Component} from "react";
import Counter from "./counter";
class CountingMachine extends Component {
    state = {
        counters:[{        "id": 1,        "alphabet": "A",        "count": 5    },    {        "id": 2,        "alphabet": "B",        "count": 8    },    {        "id": 3,        "alphabet": "C",        "count": 0    },    {        "id": 4,        "alphabet": "D",        "count": 0    }],
        data :"",
        
    };
handelDelete =(id) =>{
    let s = {...this.state};
    let index = s.counters.findIndex(e=>e.id===id);
    s.counters.splice(index,1);
    this.setState(s);
}
handelIncrement =(id) =>{
    let s = {...this.state};
    let item = s.counters.find(e=>e.id===id);
    item.count++;
    s.data+=item.alphabet;
    this.setState(s);
}
handelReset=()=>{
    let s = {...this.state};
    const arr = s.counters.map(e=>{
        return {id:e.id,alphabet:e.alphabet,count:0}
    });
    s.counters=arr;
    s.data="";
    this.setState(s);
}
    render(){
        let {counters,data} = this.state;
        return <React.Fragment>
            
                 {counters.map(ele=>{
                    return <Counter 
                     counter={ele}
                     onDelete={this.handelDelete}
                     onIncrement={this.handelIncrement}
                     />
                    })}

           <button className="btn btn-primary m-2" onClick={()=>this.handelReset()}>Reset All</button>
           <br />
           Alphabets = {data}
        </React.Fragment>
    }
}
export default CountingMachine;