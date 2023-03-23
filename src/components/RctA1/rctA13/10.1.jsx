import React,{Component} from "react";
class Task101 extends Component {
    state = {
        codeType : -1,
        codeTypes : ['ABC123','0-9','MN012'],
        codeMaker : [['A','B','C','1','2','3'],['1','2','3','4','5','6','7','8','9'],['M','N','0','1','2']],
        codes : [],
        code : "",
    };
addCode =(ch)=>{
let s = {...this.state};
s.code += ch;
this.setState(s);
}
addNewCode =()=>{
    let s = {...this.state};
    if(s.codes.indexOf(s.code)>=0)
      alert('already exist');
    else
      {s.codes.push(s.code);
      s.code = "";
      this.setState(s);}
}
clearCode =()=>{
    let s = {...this.state};
    s.code = "";
    s.codeType = -1;
    this.setState(s);
}
Codetype=(index)=>{
    let s = {...this.state};
    s.codeType = index;
    this.setState(s);
}
show =(type)=>{
    let s = {...this.state};
    
        return <React.Fragment>
            Code Type : {type==0?"ABC123":type==1?"0-9":"MN012"} <br />
            Code so far : {s.code} <br />
            {s.codeMaker[type].map(ele=>{
               return <button className="btn btn-warning m-2" onClick={()=>this.addCode(ele)}>{ele}</button>
            
            })}
            <br />
            <button className="btn btn-primary" onClick={()=>this.addNewCode()}>Add New Code</button>
            <button className="btn btn-primary m-4" onClick={()=>this.clearCode()}>Clear Code</button>
        </React.Fragment>
    
    
}
    render(){
        let {codeType,codeTypes,codeMaker,codes,code} = this.state;
        return <React.Fragment>
            <h4>Create New Code</h4>
            {codeType==-1 ? <React.Fragment><button className="btn btn-primary" onClick={()=>this.Codetype(0)}>Code ABC123</button>
            <button className="btn btn-primary m-4" onClick={()=>this.Codetype(1)}>Code 0-9</button>
            <button className="btn btn-primary" onClick={()=>this.Codetype(2)}>Code MN012</button></React.Fragment>
            : this.show(codeType)}
          
             

            <h4>List of Codes Created</h4>
            <ul>
                {codes.map(ele=><li>{ele}</li>)}
            </ul>
        </React.Fragment>
    }
}
export default Task101;