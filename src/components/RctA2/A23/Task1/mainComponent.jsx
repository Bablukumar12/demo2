import React,{Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import AddProduct from "./addProduct";
import NavBar from "./navbar";
import Product from "./product";
import Products from "./products";
class MainComponent extends Component {
    state ={}
    render(){
        return (
            <div className="container">
                <NavBar />
                <Switch>
                  <Route path="/products/add" component={AddProduct}/>
                  <Route path="/products/:id" component={Product}/>
                  <Route path="/products" component={Products} />
                  <Redirect from="/" to="/products"/>
                </Switch>
            </div>
        )
    }
}
export default MainComponent;