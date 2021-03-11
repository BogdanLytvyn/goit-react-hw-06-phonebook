import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import style from './Phonebook.module.css';

const filterContacts = (filter, contacts) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const { name } = contact;
    const contactsArray = this.state.contacts;
    const nameExist = contactsArray.some(contact => contact['name'] === name);
    if (nameExist) {
      alert(`${name} is already exist`);
      return;
    }

    const contactToAdd = {
      ...contact,
      id: shortid.generate(),
    };

    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  deleteNumber = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  // localStorage

  // ============================
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  // =====================================
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(filter, contacts);

    return (
      <div className={style.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length >= 2 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {contacts.length > 0 && (
          <ContactList
            items={filteredContacts}
            onDeleteNumber={this.deleteNumber}
          />
        )}
      </div>
    );
  }
}
