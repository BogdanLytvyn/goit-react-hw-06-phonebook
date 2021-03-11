import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDeleteNumber }) => (
  <>
    <span>
      {name}: {number}
    </span>
    <button
      className={styles.buttonDelete}
      type="button"
      onClick={onDeleteNumber}
    >
      DELETE
    </button>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteNumber: PropTypes.func.isRequired,
};

export default Contact;
