import React, { Component } from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import NavBar from './NavBar';
import ShowItems from './ShowItems';
class MainComponent extends Component {
    render() {
        return (
            <div className=''>
                
                <Switch>
                    <Route path={`/home`} component={ShowItems}/>
                    <Redirect from='/' to={`/home`}/>
                </Switch>
                
            </div>
        );
    }
}

export default MainComponent;