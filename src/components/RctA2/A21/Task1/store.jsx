import React, { Component } from "react";
class Store extends Component {
	render() {
		const { id } = this.props.match.params;
        const {stores} = this.props;
        let store = stores.find(s=>s.id===+id);
		return <div className="container">
           Id : {store.id}
           <br />
           Location : {store.location}
           <br />
           Email : {store.email}
           <br />
           Mobile : {store.mobile}
           
        </div>;
	}
}
export default Store;
