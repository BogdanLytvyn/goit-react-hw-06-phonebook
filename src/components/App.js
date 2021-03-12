import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import style from './Phonebook.module.css';
import { connect } from 'react-redux';
import actions from '../redux/contacts/contuctsActions';

class App extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className={style.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {items.length >= 2 && <Filter />}

        {items.length > 0 && <ContactList />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(actions.changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// localStorage

// ============================
// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate() {
//   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
// }
// =====================================
