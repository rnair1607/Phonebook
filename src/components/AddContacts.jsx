import React, { Component } from "react";

import "./AddContacts.css";

export class AddContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  submitClicked = (e) => {
    e.preventDefault();
    if (this.state.number.length > 0 && this.state.number.length > 0) {
      this.props.addContact(this.state);
      this.setState({
        name: "",
        number: "",
      });
    } else {
      alert(`Enter the Contact Name and Number!`);
    }
  };

  render() {
    let { name, number } = this.state;
    return (
      <div className="card">
        <form className="grid-3">
          <input
            type="text"
            value={name}
            onChange={this.handleName}
            placeholder="Contact Name"
          />
          <input
            type="number"
            value={number}
            onChange={this.handleNumber}
            placeholder="Contact Number"
          />
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.submitClicked}
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default AddContacts;
