import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Phonebook.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contuctsActions';

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.group}>
    <input
      autoComplete="off"
      className={styles.input}
      type="text"
      value={value}
      name="name"
      onChange={e => onChangeFilter(e.target.value)}
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

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(actions.changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
