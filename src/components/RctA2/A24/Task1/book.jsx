import React,{Component} from "react";
import http from "./httpService";
class Book extends Component {
    state ={data : {}}
    async componentDidMount(){
        const {id} = this.props.match.params
        console.log(id)
        let response =await http.get(`/booksapp/book/${id}`);
        console.log(response)
        this.setState({data:response.data})
    }
    render(){
        const {name,author,genre,description,blurb,review,price,avgrating}= this.state.data;
        return (
            <div className="container my-4">
                <h4>Book: {name}</h4>
                <div className="row border">
                    <div className="col-4">
                     Author
                    </div>
                    <div className="col-8">
                      {author}
                    </div>
                </div>

                <div className="row border">
                    <div className="col-4">
                     Genre
                    </div>
                    <div className="col-8">
                      {genre}
                    </div>
                </div>

                <div className="row border">
                    <div className="col-4">
                     Description
                    </div>
                    <div className="col-8">
                      {description}
                    </div>
                </div>

                <div className="row border">
                    <div className="col-4">
                     Blurb:
                    </div>
                    <div className="col-8">
                      {blurb}
                    </div>
                </div>

                <div className="row border">
                    <div className="col-4">
                     Review:
                    </div>
                    <div className="col-8">
                      {review}
                    </div>
                </div>

                <div className="row border">
                    <div className="col-4">
                     Price:
                    </div>
                    <div className="col-8">
                      {price}
                    </div>
                </div>

                <div className="row border">
                    <div className="col-4">
                     Rating:
                    </div>
                    <div className="col-8">
                      {avgrating}
                    </div>
                </div>
            </div>
        )
    }
}
export default Book;