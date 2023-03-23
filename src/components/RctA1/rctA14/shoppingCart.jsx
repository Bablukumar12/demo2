import React,{Component} from "react";
import Mobiles from "./mobiles";
class ShoppingCart extends Component {
    state = {
        mobiles : [
            {
              "name": "iPhone 12 Pro Max",
              "desc1": "6.7-inch Super Retina XDR display",
              "desc2": "Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto lenses",
              "price": 1099
            },
            {
              "name": "Samsung Galaxy S21 Ultra",
              "desc1": "6.8-inch Dynamic AMOLED 2X display",
              "desc2": "Quad-camera system with 108MP Wide, 12MP Ultra Wide, 10MP Telephoto, and 10MP Telephoto lenses",
              "price": 1199
            },
            {
              "name": "Google Pixel 6 Pro",
              "desc1": "6.4-inch OLED display",
              "desc2": "Triple-camera system with 50MP Wide, 12MP Ultra Wide, and 12MP Telephoto lenses",
              "price": 999
            },
            {
              "name": "OnePlus 9 Pro",
              "desc1": "6.7-inch Fluid AMOLED display",
              "desc2": "Quad-camera system with 48MP Wide, 50MP Ultra Wide, 8MP Telephoto, and 2MP Monochrome lenses",
              "price": 969
            },
            {
              "name": "Xiaomi Mi 11",
              "desc1": "6.81-inch AMOLED display",
              "desc2": "Triple-camera system with 108MP Wide, 13MP Ultra Wide, and 5MP Telephoto lenses",
              "price": 749
            },
            {
              "name": "Oppo Find X3 Pro",
              "desc1": "6.7-inch AMOLED display",
              "desc2": "Quad-camera system with 50MP Wide, 50MP Ultra Wide, 13MP Telephoto, and 3MP Macro lenses",
              "price": 1199
            }
          ],
          cart : [],

          
    };
    handleAddToCart =(index)=>{
       let s1 = {...this.state}
       let m1 = s1.mobiles[index];
       let ind = s1.cart.findIndex(c=>c.name==m1.name);
       if(ind>=0)
          s1.cart[ind].quantity++;
      else
         {let item ={name:m1.name,quantity:1,price:m1.price}
         s1.cart.push(item)}
       this.setState(s1)
    }
    removeFromCart =(index) =>{
      let s1 = {...this.state};
      s1.cart.splice(index,1);
      this.setState(s1)
    }
    render(){
      let {mobiles,cart} = this.state;
        return (
            <div className="container">
              <div className="row text-center">
                 {mobiles.map((m1,index) => <Mobiles
                  mobile={m1}
                  index ={index}
                  onAddToCart={this.handleAddToCart}
                  />)}
               
              </div>
              <h5>Cart</h5>
              {cart.length===0?"Cart is Empty" :
              <React.Fragment>
              <ul>
              {cart.map((c1,index)=>{
                let {name,quantity,price}=c1;
                return(
                  <li>{name} , quantity: {quantity}
                   <button className="border" onClick={()=>this.removeFromCart(index)}>Remove from Cart</button>
                  </li>
                )
              })}
            </ul>
            Number of items in cart = {cart.reduce((a,c)=>a+c.quantity,0)} <br />
            Value of cart = {cart.reduce((a,c)=>a+c.price*c.quantity,0)}
          
            </React.Fragment>
              }
              </div>
        )
    }
}
export default ShoppingCart;