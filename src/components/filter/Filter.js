import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Phonebook.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.group}>
    <input
      autoComplete="off"
      className={styles.input}
      type="text"
      value={value}
      name="name"
      onChange={onChangeFilter}
      required
    />
    <span className={styles.bar}></span>
    <label className={styles.label}>Find contacts by name</label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
