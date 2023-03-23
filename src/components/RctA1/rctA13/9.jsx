import React,{Component} from "react";
class Task9 extends Component {
    state ={
        moviesData: [
            {
            "title": "The Shawshank Redemption",
            "genre": "Drama",
            "stock": 10,
            "rate": 9.2
            },
            {
            "title": "The Godfather",
            "genre": "Crime",
            "stock": 5,
            "rate": 9.2
            },
            {
            "title": "The Dark Knight",
            "genre": "Action",
            "stock": 15,
            "rate": 9.0
            },
            {
            "title": "The Godfather: Part II",
            "genre": "Crime",
            "stock": 8,
            "rate": 9.0
            },
            {
            "title": "Pulp Fiction",
            "genre": "Crime",
            "stock": 7,
            "rate": 8.9
            },
            {
            "title": "The Lord of the Rings: The Return of the King",
            "genre": "Adventure",
            "stock": 9,
            "rate": 9.0
            },
            {
            "title": "12 Angry Men",
            "genre": "Drama",
            "stock": 11,
            "rate": 8.9
            },
            {
            "title": "Schindler's List",
            "genre": "Drama",
            "stock": 6,
            "rate": 8.9
            },
            {
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "genre": "Adventure",
            "stock": 12,
            "rate": 8.8
            }
            ]

    }

   delete = (index) =>{
    let s = {...this.state};
    s.moviesData.splice(index,1);
    this.setState(s)
   }
    render(){
        let {moviesData} = this.state;
        return <div className="container">
                 <h5> {moviesData.length>0?"Showing " +moviesData.length +" movies" : "There are no movies"}</h5>
                 <table className="table">
                    <div className="row border bg-dark text-white ">
                        <div className="col-3">Title</div>
                        <div className="col-2">Genre</div>
                        <div className="col-2">Stock</div>
                        <div className="col-2">Rate</div>
                        <div className="col-3"></div>
                    </div>
                    {moviesData.map((ele,index)=>{
                        let {title,genre,stock,rate}=ele;
                         return (<React.Fragment>
                     <div className="row border">
                        <div className="col-3">{title}</div>
                        <div className="col-2">{genre}</div>
                        <div className="col-2">{stock}</div>
                        <div className="col-2">{rate}</div>
                        <div className="col-3"><button className="btn btn-danger bg-danger btn-sm m-2" onClick={()=>this.delete(index)}>Delete</button></div>
                    </div>
                    </React.Fragment>)
                    })}
                 </table>
            </div>
    }
}
export default Task9;