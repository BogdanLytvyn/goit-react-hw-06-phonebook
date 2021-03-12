import React from 'react';
import styles from './Contact.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contuctsActions';

const Contact = ({ contact, onDeleteNumber }) => {
  const deleteItem = () => {
    onDeleteNumber(contact.id);
  };

  return (
    <>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button
        className={styles.buttonDelete}
        type="button"
        onClick={deleteItem}
      >
        DELETE
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteNumber: id => dispatch(actions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contact);
