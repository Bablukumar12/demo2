import React, { Component } from 'react';
import http from './httpService';
class DeleteStudent extends Component {
    async componentDidMount(){
        const {id} = this.props.match.params;
        let response = await http.deleteApi(`/svr/students/${id}`);
        this.props.history.push("/students")
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default DeleteStudent;