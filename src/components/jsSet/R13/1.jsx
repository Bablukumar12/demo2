import React,{Component} from "react";
class JsSet1 extends Component {
    state = {
        items: [{ name: "Liril", stock: 10, sales: 7, price: 10 },{ name: "Dove", stock: 20, sales: 9, price: 20 },{ name: "Pears", stock: 35, sales:20, price: 15 },{ name: "Surf", stock: 45, sales: 22, price: 55 },{ name: "Ariel", stock: 20, sales: 8, price: 40 },{ name: "Tide", stock: 20, sales: 11, price: 35 },{ name: "Nirma", stock: 30, sales: 21, price: 20 }],
}
    
    render(){
        let {items} = this.state;
        return <div className="container">
            <div className="table">
                <div  className="row border bg-dark text-white">
                    <div className="col-2 border">Name</div>
                    <div className="col-2 border">Stock</div>
                    <div className="col-2 border">Sales</div>
                    <div className="col-2 border">Stock Left</div>
                    <div className="col-2 border">Price</div>
                    <div className="col-2 border">Sales Value</div>
                </div>
                {items.map(ele=>{
                    let {name,stock,sales,price} = ele;
                    return (
                        <div  className="row border">
                    <div className="col-2 border">{name}</div>
                    <div className="col-2 border">{stock}</div>
                    <div className="col-2 border">{sales}</div>
                    <div className="col-2 border">{stock-sales}</div>
                    <div className="col-2 border">{price}</div>
                    <div className="col-2 border">{price*sales}</div>
                </div>
                    )
                })}
            </div>
            <div className="row border">
                <div className="col-3 border">
                    Max Seller by Quantity <br />
                    Name : {items.reduce((a,c)=>c.sales>a.sales?c:a).name} <br />
                    Qauntity : {items.reduce((a,c)=>c.sales>a.sales?c:a).sales}
                </div>
                <div className="col-3 border">
                    Max Seller by Value <br />
                    Name : {items.reduce((a,c)=>c.price*c.sales>a.price*a.sales?c:a).name} <br />
                    Qauntity : {items.reduce((a,c)=>c.price*c.sales>a.price*a.sales?c:a).price*items.reduce((a,c)=>c.price*c.sales>a.price*a.sales?c:a).sales}
                </div>

                <div className="col-3 border">
                    Min Seller by Quantity <br />
                    Name : {items.reduce((a,c)=>c.sales<a.sales?c:a).name} <br />
                    Qauntity : {items.reduce((a,c)=>c.sales<a.sales?c:a).sales}
                </div>
                <div className="col-3 border">
                    Min Seller by Value <br />
                    Name : {items.reduce((a,c)=>c.price*c.sales<a.price*a.sales?c:a).name} <br />
                    Qauntity : {items.reduce((a,c)=>c.price*c.sales<a.price*a.sales?c:a).price*items.reduce((a,c)=>c.price*c.sales>a.price*a.sales?c:a).sales}
                </div>
            </div>
            <div className="row">
            <div className="col-12 border text-center">
               Number of Products : {items.length} <br />
               Total Stock by Quantity : {items.reduce((a,c)=>a+c.stock,0)} <br />
               Total Stock by Value : {items.reduce((a,c)=>a+(c.price*c.stock),0)} <br />
               Total Sales by Quantity : {items.reduce((a,c)=>a+(c.stock-c.sales),0)} <br />
               Total Sales by Value : {items.reduce((a,c)=>a+(c.price*c.sales),0)} <br />
               
            </div>
            <div className="col border text-center">
                <button className="btn btn-primary btn-sm m-1">Close the Shop for the Day</button>
            </div>
            </div>
        </div>
    }
}
export default JsSet1;