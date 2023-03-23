import React, { Component } from 'react';
import {Switch, Route,Redirect} from "react-router-dom";
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';
import NavBar from './NavBar';
import Student from './Student';
import Students from './Students';
class MainComponent extends Component {
    render() {
        return (
            <div className='container'>
                <NavBar/>
                <Switch>
                <Route path="/students/:id/delete" component={DeleteStudent}/>

                <Route path="/students/:id/edit" component={AddStudent}/>

                <Route path="/students/add" component={AddStudent}/>

                <Route path="/students/course/:course" component={Students}/>
                <Route path="/students/:id" component={Student}/>

                    <Route path="/students" component={Students}/>
                    <Redirect from='/' to="/students"/>
                </Switch>
            </div>
        );
    }
}

export default MainComponent;