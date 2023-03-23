import React,{Component} from "react";
class Task8 extends Component {
    state ={
        priceData: [{ name: "Perk", category:"Food", oldPrice: 10, newPrice: 10 },{ name: "5Star", category:"Food", oldPrice: 15, newPrice: 12 },{ name: "Pepsi", category:"Drink", oldPrice: 20, newPrice: 22 },{ name: "Maggi", category:"Food", oldPrice: 12, newPrice: 15 },{ name: "Coke", category:"Drink", oldPrice: 20, newPrice: 20 },{ name: "Gems", category:"Food", oldPrice: 10, newPrice: 10 },{ name: "7Up", category:"Drink", oldPrice: 15, newPrice: 17 },{ name: "Lindt", category:"Food", oldPrice: 80, newPrice: 90 },{ name: "Nutties", category:"Food", oldPrice: 20, newPrice: 18 },{ name: "Slice", category:"Drink", oldPrice: 18, newPrice: 16 }],
        sortBy : "",
        filterBy: "",

    }

   sort =(index)=>{
    let s = {...this.state};
    if(index==1)
      {s.priceData.sort((a,b)=>a.name.localeCompare(b.name));
      s.sortBy= "Name"}
    else if(index==2)
    {s.priceData.sort((a,b)=>a.category.localeCompare(b.category));
       s.sortBy= "Category"}
    else if(index==3)
   { s.priceData.sort((a,b)=>a.oldPrice-b.oldPrice);
    s.sortBy= "Old Price"}
    else if(index==4){
        { s.priceData.sort((a,b)=>a.newPrice-b.newPrice);
            s.sortBy= "New Price"}
    }
    
    this.setState(s);
   }

   filter =(index)=>{
    let s = {...this.state};
    if(index==1)
      {s.priceData = s.priceData.filter(ele=>ele.category=="Food");
      s.filterBy= "Category : Food"}
    else if(index==2)
    {s.priceData = s.priceData.filter(ele=>ele.category=="Drink");
      s.filterBy= "Category : Drink"}
    else if(index==3)
    {s.priceData = s.priceData.filter(ele=>ele.oldPrice<ele.newPrice);
      s.filterBy= "Price Increase"}
    else if(index==4)
      {s.priceData = s.priceData.filter(ele=>ele.oldPrice>ele.newPrice);
        s.filterBy= "Price Decrease"}
    else if(index==4)
        {s.priceData = s.priceData.filter(ele=>ele.oldPrice==ele.newPrice);
          s.filterBy= "Price Decrease"}
    
    this.setState(s);
   }
    render(){
        let {priceData,sortBy,filterBy} = this.state;
        return <div className="container">
            {sortBy&& !filterBy ? <h4>Sorted by {sortBy}</h4>: !filterBy? <h4>Not Sorted</h4> : ""}
            {filterBy ? <h4>{filterBy}</h4>:""}
            <button className="btn btn-primary btn-sm m-2" onClick={()=>this.filter(1)}>Food</button>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>this.filter(2)}>Drink</button>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>this.filter(3)}>Increase</button>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>this.filter(4)}>Decrease</button>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>this.filter(5)}>Same</button>
            <div className="row bg-dark text-white"> 
                  <div className="col-3 border" onClick={()=>this.sort(1)}>Name</div>
                  <div className="col-3 border" onClick={()=>this.sort(2)}>Category</div>
                  <div className="col-3 border" onClick={()=>this.sort(3)}>Old Price</div>
                  <div className="col-3 border" onClick={()=>this.sort(4)}>New Price</div>
                </div>
                {priceData.map(ele=>{
                    let {name,category,oldPrice,newPrice} =ele;
                    return (
                        <div className="row border"> 
                  <div className="col-3 border">{name}</div>
                  <div className="col-3 border">{category}</div>
                  <div className="col-3 border">{oldPrice}</div>
                  <div className="col-3 border">{newPrice}</div>
                </div>
                    )
                })}
            </div>
    }
}
export default Task8;