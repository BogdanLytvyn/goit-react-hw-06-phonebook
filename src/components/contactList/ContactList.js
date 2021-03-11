import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../contact/Contact';

const ContactList = ({ items, onDeleteNumber }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Contact {...item} onDeleteNumber={() => onDeleteNumber(item.id)} />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteNumber: PropTypes.func.isRequired,
};

export default ContactList;
