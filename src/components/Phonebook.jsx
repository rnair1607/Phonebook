import React, { Component } from "react";
import AddContacts from "./AddContacts";
import ContactCard from "./ContactCard";

export class Phonebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          name: "Rahul",
          number: "9909999099",
        },
        {
          name: "Ravi",
          number: "9909999099",
        },
        {
          name: "Rohan",
          number: "9909999099",
        },
      ],
    };
  }

  addContact = (e) => {
    this.setState({
      contacts: [...this.state.contacts, e],
    });
  };

  removeContact = (e) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.name !== e),
    });
  };

  render() {
    let { contacts } = this.state;
    return (
      <div className="container">
        <AddContacts addContact={this.addContact} />
        {contacts.map((data, key) => {
          return (
            <ContactCard
              name={data.name}
              number={data.number}
              removeContact={this.removeContact}
            />
          );
        })}
      </div>
    );
  }
}

export default Phonebook;
