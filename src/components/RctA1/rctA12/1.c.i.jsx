import React,{Component} from "react";
class Ci extends Component{
    state = {list1 :["John", "Emily", "Jessica", "Michael", "David"],
    list2 :[],
}
clickOnList1=(index)=>{
    let s1 = {...this.state};
    let a = s1.list1.splice(index,1);
    s1.list2.push(a);
    this.setState(s1);
}
clickOnList2=(index)=>{
    let s1 = {...this.state};
    let a = s1.list2.splice(index,1);
    s1.list1.push(a);
    this.setState(s1);
}
render(){
    let {list1,list2}=this.state;
    return <React.Fragment>
        <div className="row">
            <div className="col-6 border">
                <h4>List1</h4>
                {list1.map((ele,index)=>{
                    return <span onClick={()=>this.clickOnList1(index)}>
                        {ele}
                        <br />
                    </span>
                })}
            </div>
            <div className="col-6 border">
                <h4>List2</h4>
                {list2.map((ele,index)=>{
                    return <span>
                        {ele} <button className="btn btn-danger btn-sm" onClick={()=>this.clickOnList2(index)}>x</button>
                        <br />
                    </span>
                })}
            </div>
        </div>
    </React.Fragment>
}

}
export default Ci;