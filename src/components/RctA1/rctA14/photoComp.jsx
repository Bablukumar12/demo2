import React,{Component} from "react";
class PhotoComp extends Component {
    state = {};
getBgColor=(myOption)=> myOption==="like" ? "bg-success" : myOption==="dislike" ? "bg-warning" : "bg-light";

    render(){
        let {photo,onLike,index,onDislike,onDelete} = this.props;
        const {img,like,dislike,myOption} = photo;
        return (
            <div className={"col-4 border text-center "+this.getBgColor(myOption)}>
                <img src={img} alt="" /> <br />
                <i className={myOption=="like"?"fa fa-thumbs-up text-white bg-primary p-1 m-2":"fa fa-thumbs-o-up text-white bg-primary p-1 m-2"}
                onClick={()=>onLike(index)}  
                >{like}</i>
                <i className={myOption=="dislike"?"fa fa-thumbs-down bg-warning p-1 m-2":"fa fa-thumbs-o-down bg-warning p-1 m-2"}
                onClick={()=>onDislike(index)} 
                >{dislike}</i>

                <i className="fa fa-trash text-danger bg-warning m-2 p-1" 
                onClick={()=>onDelete(index)} 
                 ></i>
                </div>
        )
    }
}
export default PhotoComp;