import React,{Component} from "react";
class Book extends Component {
    state = {};

    render(){
        let {book,index,onIssue} = this.props;
        let {name,author,issued} = book;
        return (
               
                <div className="col-6 border bg-warning text-center">
                  <span className="display-6">{name}</span> <br />
                  {author} <br />
                  <button className="btn btn-light btn-sm m-2" onClick={()=>onIssue(index)}>Issue</button>
                </div>
                
           
        )
    }
}
export default Book;