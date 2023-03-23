import React, { Component } from "react";
import CustomerForm from "./CustomerForm";
class CustomerSystem extends Component {
	state = {
		customers: [],
		customer: {
			name: "",
			gender: "",
			deliveryOption: "",
			paymentOption: [],
			deliverySlot: "",
		},
		deliverySlots: ["2PM - 6PM", "Before 10 AM", "2PM - 6PM"],
		genders: ["Male", "Female"],
		paymentOptions: ["Credit Card", "Debit Card", "Net Banking"],
		deliveryOptions: ["home", "office", "pickup"],
		view: 0,
		editIndex: -1,
	};
	handleNewCustomer = () => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.editIndex = -1;
		this.setState(s1);
	};
	handleCustomerList = () => {
		let s1 = { ...this.state };
		s1.view = 2;

		this.setState(s1);
	};
	handleSubmit = (customer) => {
		let s1 = { ...this.state };
		s1.editIndex === -1
			? s1.customers.push(customer)
			: (s1.customers[s1.editIndex] = customer);
		s1.view = 2;
		s1.customer = {
			name: "",
			gender: "",
			deliveryOption: "",
			paymentOption: [],
			deliverySlot: "",
		};
		console.log(s1.customers);
		this.setState(s1);
	};
	handleEdit = (index) => {
		let s1 = { ...this.state };
		s1.view = 1;
		s1.editIndex = index;
		s1.customer = s1.customers[index];
		this.setState(s1);
	};
	render() {
		let {
			customer,
			customers,
			view,
			deliveryOptions,
			paymentOptions,
			genders,
			deliverySlots,
		} = this.state;
		return (
			<React.Fragment>
				<div className="container">
					<button
						className="btn btn-primary m-2"
						onClick={() => this.handleNewCustomer()}>
						New Customer
					</button>
					<button
						className="btn btn-primary m-2"
						onClick={() => this.handleCustomerList()}>
						List of Customers
					</button>
					{view === 0 ? (
						<h4>Welcome to the Customer System</h4>
					) : view === 1 ? (
						<CustomerForm
							paymentOptions={paymentOptions}
							deliveryOptions={deliveryOptions}
							customer={customer}
							genders={genders}
							deliverySlots={deliverySlots}
							onSubmit={this.handleSubmit}
						/>
					) : (
						<React.Fragment>
							{customers.length === 0 ? (
								<h4>There are ZERO customers</h4>
							) : (
								<React.Fragment>
									<div className="row bg-dark text-white">
										<div className="col-2 border">Name</div>
										<div className="col-2 border">Gender</div>
										<div className="col-2 border">Delivery</div>
										<div className="col-2 border">Payements</div>
										<div className="col-2 border">Slot</div>
										<div className="col-2 border"></div>
									</div>

									{customers.map((c1, index) => {
										let {
											name,
											gender,
											deliveryOption,
											paymentOption,
											deliverySlot,
										} = c1;
										return (
											<div className="row">
												<div className="col-2 border">{name}</div>
												<div className="col-2 border">{gender}</div>
												<div className="col-2 border">{deliveryOption}</div>
												<div className="col-2 border">
													{paymentOption.map((p1) => p1 + " ")}
												</div>
												<div className="col-2 border">{deliverySlot}</div>
												<div className="col-2 border">
													<button
														className="btn btn-info btn-sm"
														onClick={() => this.handleEdit(index)}>
														Edit
													</button>
												</div>
											</div>
										);
									})}
								</React.Fragment>
							)}
						</React.Fragment>
					)}
				</div>
			</React.Fragment>
		);
	}
}
export default CustomerSystem;
