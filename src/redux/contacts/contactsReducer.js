import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './contuctsActions';
import { combineReducers } from 'redux';

const itemsReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

const contactReucers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactReucers;

//  ============= без reduxjs/toolkit =================
// import { combineReducers } from 'redux';
// import actionTypes from './contactsActionTypes';

// const items = (state = [], action) => {
//   switch (action.type) {
//     case actionTypes.ADD_CONTACT:
//       return [...state, action.payload];

//     case actionTypes.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', action) => {
//   switch (action.type) {
//     case actionTypes.FILTER_CONTACT:
//       return action.payload.filter;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
