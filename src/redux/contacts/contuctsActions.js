import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
} from './contactsActionTypes';

import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction(ADD_CONTACT, ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction(DELETE_CONTACT);
const changeFilter = createAction(FILTER_CONTACT);

export { addContact, deleteContact, changeFilter };

//  ============= без reduxjs/toolkit =================
// import { v4 as uuidv4 } from 'uuid';
// import actionTypes from './contactsActionTypes';

// const addContact = ({ name, number }) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = id => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: { id },
// });

// const changeFilter = filter => ({
//   type: actionTypes.FILTER_CONTACT,
//   payload: { filter },
// });

// export default {
//   addContact,
//   deleteContact,
//   changeFilter,
// };
