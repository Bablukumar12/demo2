import React,{Component} from "react";
class Task4 extends Component {
    state = {
        products: [{ name: "Perk", price: 10, sales: 7 },{ name: "5Star", price: 15, sales: 9 },{ name: "Pepsi", price: 20, sales: 20 },{ name: "Maggi", price: 12, sales: 15},{ name: "Coke", price: 20, sales: 50 },{ name: "Lindt", price: 80, sales: 4 }],
        sortBy : "",
        filterBy : "",

    }
   sort =(index)=>{
    let s = {...this.state};
    if(index==1)
      {s.products.sort((a,b)=>a.name.localeCompare(b.name));
      s.sortBy= "Name"}
    else if(index==2)
       {s.products.sort((a,b)=>a.price-b.price);
       s.sortBy= "Price"}
    else if(index==3)
   { s.products.sort((a,b)=>a.sales-b.sales);
    s.sortBy= "Sales"}
    else if(index==4){
        s.products.sort((a,b)=>a.sales*a.price-b.sales*b.price);
        s.sortBy= "Value"
    }
    
    this.setState(s);
   }
   filter =(index)=>{
    let s = {...this.state};
    if(index==1)
      {s.products = s.products.filter(ele=>ele.price>=15);
      s.filterBy= "Price >= 15"}
    else if(index==2)
    {s.products = s.products.filter(ele=>ele.sales>=10);
        s.filterBy= "Sales >= 10"}
    else if(index==3)
    {s.products = s.products.filter(ele=>ele.sales*ele.price>=100);
    s.filterBy= "Value >= 100"}
    
    this.setState(s);
   }
    render(){
        let {products,sortBy,filterBy} = this.state;
        return <div className="container">
            {sortBy ? <h4>Sorted by {sortBy}</h4>: <h4>Not Sorted</h4>}
            {filterBy ? <h4>Filter :  {filterBy}</h4>:""}
            <button className="btn btn-primary btn-sm m-2" onClick={()=>this.filter(1)}>Price>=15</button>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>this.filter(2)}>Sales>=10</button>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>this.filter(3)}>Value>=100</button>
                <div className="row bg-dark text-white"> 
                  <div className="col-3" onClick={()=>this.sort(1)}>Name</div>
                  <div className="col-3" onClick={()=>this.sort(2)}>Price</div>
                  <div className="col-3" onClick={()=>this.sort(3)}>Sales</div>
                  <div className="col-3" onClick={()=>this.sort(4)}>Value</div>
                </div>
                {products.map(ele=>{
                    let {name,price,sales} =ele;
                    return (
                        <div className="row border"> 
                  <div className="col-3 border">{name}</div>
                  <div className="col-3 border">{price}</div>
                  <div className="col-3 border">{sales}</div>
                  <div className="col-3 border">{price*sales}</div>
                </div>
                    )
                })}
            </div>
    }
}
export default Task4;