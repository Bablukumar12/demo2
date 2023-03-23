import React,{Component} from "react";
class AllProducts14 extends Component {
    state = {products: [{ name: "Liril", quantity: 10, sales: 7, price: 10},{ name: "Dove", quantity: 20, sales: 9, price: 20},{ name: "Pears", quantity: 35, sales: 20, price: 15},{ name: "Surf", quantity: 45, sales: 22, price: 55},{ name: "Ariel", quantity: 20, sales: 7, price: 40},{ name: "Tide", quantity: 20, sales: 11, price: 35 },{ name: "Nirma", quantity: 30, sales: 21, price: 20 }]}
    

    render(){
        let {products}=this.state;
        const p = products.filter(ele=>ele.quantity>25)
        return <React.Fragment>
            <h4>Stock > 25</h4>
            <ul>
          {p.map(ele=>{
            let {name,quantity,sales,price} = ele;
             return <li>{name},stock={quantity},sales={sales},price={price}</li>
          })}
          </ul>
        </React.Fragment>
    }
}
export default AllProducts14;