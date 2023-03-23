import React,{Component} from "react";
class Contact extends Component {
    
    render(){
        let {email,address} = this.props.contact;
        return (
            <div className="container">
                <h4>Welcome to the CONTACT page</h4>
                <h6>Email : {email}</h6>
                <h6>Address : {address}</h6>
            </div>
        )
    }
}
export default Contact;