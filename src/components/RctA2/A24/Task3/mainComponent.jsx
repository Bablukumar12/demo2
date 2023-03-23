import React, { Component } from 'react';
import CompA from './compA';
import CompB from './compB.';
import NavBar from './navbar';
import {Switch,Route} from 'react-router-dom';

class MainComponent extends Component {
    render() {
        return (
            <div className='container'>
                <NavBar/>
                <Switch>
                <Route path="/compA" component={CompA}/>
                <Route path="/compB/:name" component={CompB}/>
                    
                </Switch>
                
            </div>
        );
    }
}

export default MainComponent;