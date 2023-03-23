import React,{Component} from "react";
class ProductCart extends Component{
    state = {
        products :[  {    "name": "Product 1",    "price": 19.99  },  {    "name": "Product 2",    "price": 29.99  },  {    "name": "Product 3",    "price": 39.99  }],
        cart : [],

    };
    showCart=()=>{
        const {cart} = this.state;
      if(cart.length===0) return <h4>Cart is Empty</h4>;
      return (
        <ul>
            {cart.map((item)=> {
                let {name,price,qty} = item;
                return (
                    <li>
                        {name}, price={price}, qty={qty}
                    </li>
                );
            })}
        </ul>
      )
    }
    showProducts = () => {
        const {products} = this.state;
       return <React.Fragment>
        <div className="row bg-dark text-white">
        <div className="col-4">Name</div>
        <div className="col-4">Price</div>
        <div className="col-4"></div>
       </div>
       {products.map((ele,index)=>{
        let {name,price} = ele;
        return <div className="row">
        <div className="col-4">{name}</div>
        <div className="col-4">{price}</div>
        <div className="col-4"><button className="btn btn-primary btn-sm" onClick={()=>this.addToCart(index)}>Add</button></div>
       </div>
       })}

       </React.Fragment>
    }
    addToCart = (index)=>{
        let s1 ={...this.state}
        let pr = s1.products[index];
        let x1 = s1.cart.find(c1=>c1.name===pr.name);
        x1 ? x1.qty+=1 : s1.cart.push({...pr,qty:1});
        this.setState(s1)
    }
    render(){
        let {products,cart}=this.state;
        return <React.Fragment>
           {this.showCart()}
           {this.showProducts()}
        </React.Fragment>
    }
}
export default ProductCart;

// Event are written in CamelCase.CamelCase.
// E.g. onClick={()=>this.handleClick(params)}



// CamelCase is a naming convention in computer programming and other 
// contexts. It refers to the practice of writing compound words or phrases 
// in which the first word is written in lowercase and each subsequent word 
// is capitalized, with no spaces or punctuation between words. The 
// capitalization style resembles the hump of a camel, hence the name 
// "CamelCase." The goal of CamelCase is to make the compound words more 
// readable, especially in the context of code and variables.


// After the state of a component is updated in React, the component 
// re-renders, and the updated state values are used during the render 
// process. If the updated state values cause changes in the component's 
// render output, those changes will be reflected in the user interface. 
// Additionally, React may update the DOM to reflect the updated render 
// output, if necessary.


// Initialize the state: In React, you can initialize the state in the component's 
// constructor method

// Modify the state: To modify the state in React, you need to use the setState method. This 
// method takes an object that contains the new state values and updates the component's 
// state.

// Render the updated state: Once the state has been updated, React will re-render the 
// component to reflect the changes. You can access the state values in the component's 
// render method using this.state.


// Never modify state directly, use setState method instead.

// State updates may be asynchronous, and multiple setState calls may be batched for performance.

// Do not rely on the value of this.state immediately after calling setState, because it might not reflect the updated state 
// yet.

// Use setState correctly in lifecycle methods, and especially, avoid using setState in the render method.