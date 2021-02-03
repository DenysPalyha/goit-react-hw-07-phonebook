import axios from 'axios';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from '../actions/contactsActions.js';

const addContacts = contacts => dispatch => {
  dispatch(addContactsRequest());

  axios
    .post('http://localhost:2000/contacts', contacts)
    .then(response => {
      dispatch(addContactsSuccess(response.data));
    })
    .catch(error => dispatch(addContactsError()));
};

const getContacts = () => dispatch => {
  dispatch(getContactsRequest());

  axios
    .get('http://localhost:2000/contacts')
    .then(response => {
      dispatch(getContactsSuccess(response.data));
    })
    .catch(error => dispatch(getContactsError()));
};

const deleteContacts = id => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactsSuccess(id));
    })
    .catch(error => dispatch(deleteContactsError()));
};

export default { addContacts, getContacts, deleteContacts };
