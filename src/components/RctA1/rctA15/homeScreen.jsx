import React, { Component } from "react";
import CustomerForm from "./customerForm";
class HomeScreen extends Component {
	state = {
		customers: [],
		currentView: 0,
		customer: {
			name: "",
			age: "",
			email: "",
		},
		editIndex: -1,
	};
	handleNewCustomer = () => {
		let s1 = { ...this.state };
		s1.currentView = 1;
		s1.customer = {};
		this.setState(s1);
	};
	handleListOfCustomers = () => {
		let s1 = { ...this.state };
		s1.currentView = 2;
		this.setState(s1);
	};
	handlePerson = (customer) => {
		let s1 = { ...this.state };
		s1.editIndex == -1
			? s1.customers.push(customer)
			: (s1.customers[s1.editIndex] = customer);
		s1.currentView = 2;
		this.setState(s1);
	};
	handleEdit = (index) => {
		let s1 = { ...this.state };
		s1.currentView = 1;
		s1.customer = s1.customers[index];
		s1.editIndex = index;
		this.setState(s1);
	};
	render() {
		let { customers, currentView, customer } = this.state;
		return (
			<div className="container">
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleNewCustomer()}>
					New Customer
				</button>
				<button
					className="btn btn-primary m-2"
					onClick={() => this.handleListOfCustomers()}>
					List of Customers
				</button>
				{currentView == 0 ? (
					<h5>Welcome to the Customer System</h5>
				) : currentView == 1 ? (
					<CustomerForm onSubmit={this.handlePerson} customer={customer} />
				) : currentView == 2 ? (
					<table className="table">
						<div className="row bg-dark text-white border">
							<div className="col-2 border"> Name</div>
							<div className="col-2 border"> Age</div>
							<div className="col-6 border"> Email</div>
							<div className="col-2 border"></div>
						</div>
						{customers.map((c1, index) => {
							let { name, age, email } = c1;
							return (
								<div className="row">
									<div className="col-2 border"> {name}</div>
									<div className="col-2 border"> {age}</div>
									<div className="col-6 border"> {email}</div>
									<div className="col-2 border">
										{" "}
										<button
											className="btn bg-info btn-info btn-sm"
											onClick={() => this.handleEdit(index)}>
											Edit
										</button>
									</div>
								</div>
							);
						})}
					</table>
				) : (
					""
				)}
			</div>
		);
	}
}
export default HomeScreen;
