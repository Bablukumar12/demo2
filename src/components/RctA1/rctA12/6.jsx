import React,{Component} from "react";
class Task6 extends Component{
    state = {products: [{ name: "Perk", quantity: 10, sales: 7 },{ name: "5Star", quantity: 7, sales: 9 },{ name: "Pepsi", quantity: 10, sales: 20 },{ name: "Maggi", quantity: 41, sales: 22 },{ name: "Coke", quantity: 18, sales: 50 }]};

    render(){
        let {products} = this.state;
        const products1 = products.sort((a,b)=>a.sales-b.sales)
        return <div className="container">
            <h4>Table View</h4>
            <table className="table">
            <tr className="bg-dark text-white text-center border">
                    <td>name</td>
                    <td>quantity</td>
                    <td>sales</td>
                </tr>
            {products1.map(ele=>{
                let {name,quantity,sales}=ele
                let getClass = quantity>=sales? 'bg-success' :'bg-danger'
                return <tr className={"text-center border "+getClass}>
                    <td className="border">{name}</td>
                    <td className="border">{quantity}</td>
                    <td className="border">{sales}</td>
                </tr>
               
            })}
            <tr className="text-center bg-primary ">
                <td className="border">Total</td>
                <td className="border">{products.reduce((a,c)=>a+c.quantity,0)}</td>
                <td className="border">{products.reduce((a,c)=>a+c.sales,0)}</td>
            </tr>
            </table>
        </div>
    }
}
export default Task6;