import React, { Component } from "react";

class CustomerForm extends Component {
  state = {
    customer: this.props.customer,
  };

  handleChange = (e) => {
    let s1 = { ...this.state };
    s1.customer[e.currentTarget.name] = e.currentTarget.value;
    this.setState(s1);
  };

  render() {
    let { onSubmit } = this.props;
    let { name, age, email } = this.state.customer;
    return (
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="">Age</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={age}
          onChange={this.handleChange}
        />
        <label htmlFor="">Email ID</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={this.handleChange}
        />{" "}
        <br />
        <button
          className="btn btn-primary"
          onClick={() => onSubmit(this.state.customer)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default CustomerForm;
