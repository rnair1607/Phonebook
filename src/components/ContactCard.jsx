import React, { Component } from "react";

import "./ContactCard.css";

export class ContactCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showControl: false,
      number: this.props.number,
    };
  }

  toggleControl = () => {
    if (this.state.showControl === false) {
      this.setState({
        showControl: true,
      });
    } else {
      this.setState({
        showControl: false,
      });
    }
  };

  handleNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  deleteContact = () => {
    this.props.removeContact(this.props.name);
  };
  render() {
    let { name } = this.props;
    let { number, showControl } = this.state;
    return (
      <div className="card">
        <h1>
          {name}
          <button className="btn btn-sm" onClick={this.toggleControl}>
            {showControl ? "-" : "+"}
          </button>
          <button class="btn btn-danger btn-sm" onClick={this.deleteContact}>
            x
          </button>
        </h1>
        <h3>{number}</h3>
        {showControl && (
          <input
            type="number"
            value={number}
            onChange={this.handleNumberChange}
          />
        )}
      </div>
    );
  }
}

export default ContactCard;
