import React,{Component} from "react";
class JsSet215 extends Component {
    state = {
        products: [{ name: "Liril", quantity: 10, sales: 7, price: 10},{ name: "Dove", quantity: 20, sales: 9, price: 20},{ name: "Pears", quantity: 35, sales: 20, price: 15},{ name: "Surf", quantity: 45, sales: 22, price: 55},{ name: "Ariel", quantity: 20, sales: 7, price: 40},{ name: "Tide", quantity: 20, sales: 11, price: 35 },{ name: "Nirma", quantity: 30, sales: 21, price: 20 }],

}
sort =(index)=>{
    
    let s = {...this.state};
    if(index===0)
      s.products.sort((a,b) => a.name.localeCompare(b.name))
    else if(index===1)
      s.products.sort((a,b) => a.quantity-b.quantity)
    else if(index===2)
      s.products.sort((a,b) => a.sales-b.sales)
    else if(index===3)
      s.products.sort((a,b) => a.price-b.price)
    this.setState(s)
}
    render(){
        let {products} = this.state;
        const p = products.sort((a,b)=>b.price-a.price)
        const fp = p.filter(ele=>ele.sales<20)
        return <div className="container">
            <h4>Sale less than 20,Sorted by Price(desc)</h4>
            <table className="table">
            <div className="row border bg-dark text-white">
                            <div className="col-3 border" onClick={()=>this.sort(0)}>name</div>
                            <div className="col-3 border" onClick={()=>this.sort(1)}>quantity</div>
                            <div className="col-3 border" onClick={()=>this.sort(2)}>sales</div>
                            <div className="col-3 border" onClick={()=>this.sort(3)}>price</div>
                        </div>
                 {fp.map(ele=>{
                    let {name,quantity,sales,price}=ele;
                    return (
                        <div className="row border">
                            <div className="col-3 border">{name}</div>
                            <div className="col-3 border">{quantity}</div>
                            <div className="col-3 border">{sales}</div>
                            <div className="col-3 border">{price}</div>
                        </div>
                    )
                })}
            </table>
        </div>
    }
}
export default JsSet215;