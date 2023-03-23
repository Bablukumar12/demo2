import React,{Component} from "react";
import PhotoComp from "./photoComp";
class PhotoPage extends Component {
    state = {
        photos : [
            {
                "img": "https://picsum.photos/id/12/240/160",
                "like": 12,
                "dislike": 2,
                "myOption": "like"
            },
            {
                "img": "https://picsum.photos/id/1051/240/160",
                "like": 213,
                "dislike": 21,
                "myOption": ""
            },
            {
                "img": "https://picsum.photos/id/1079/240/160",
                "like": 23,
                "dislike": 12,
                "myOption": "dislike"
            },
            {
                "img": "https://picsum.photos/id/1084/240/160",
                "like": 32,
                "dislike": 1,
                "myOption": "like"
            },
            {
                "img": "https://picsum.photos/id/104/240/160",
                "like": 324,
                "dislike": 0,
                "myOption": ""
            },
            {
                "img": "https://picsum.photos/id/10/240/160",
                "like": 123,
                "dislike": 0,
                "myOption": "like"
            },
            
        ],
        
    };
    handleLike=(index)=>{
        let s = {...this.state};
        let photo = s.photos[index];
        let {img,like,dislike,myOption}=photo;
        if(myOption=="like"){
          like--;
          myOption="";
        }
        else if(myOption=="dislike"){
            dislike--;
            like++;
            myOption="like";
        }
        else{
            like++;
            myOption="like"
        }
     photo.like=like;
     photo.dislike=dislike;
     photo.myOption= myOption;
     this.setState(s);
    }

    handleDislike=(index)=>{
        let s = {...this.state};
        let photo = s.photos[index];
        let {img,like,dislike,myOption}=photo;
        if(myOption=="dislike"){
          dislike--;
          myOption="";
        }
        else if(myOption=="like"){
            like--;
            dislike++;
            myOption="dislike";
        }
        else{
            dislike++;
            myOption="dislike"
        }
     photo.like=like;
     photo.dislike=dislike;
     photo.myOption= myOption;
     this.setState(s);
    }

    handleDelete =(index) =>{
       let s1 = {...this.state};
       s1.photos.splice(index,1);
       this.setState(s1)
    }
    render(){
        let {photos} = this.state;

        return <div className="container">
            <div className="row">
            {photos.map((ele,index)=>(<PhotoComp photo={ele}
             onLike={this.handleLike}
             onDislike={this.handleDislike}
             index ={index}
             onDelete={this.handleDelete}
             />))}
             
            </div>
         </div>
    }
}
export default PhotoPage;