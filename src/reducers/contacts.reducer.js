import _ from 'lodash';
import * as types from '../actions/contacts.action';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  allContacts: [],
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CONTACTS_FETCHED:
      return state.merge({
        allContacts: action.allContacts
      });
    default:
      return state;
  }
}

export function getGroupedContacts(state) {
  return _.groupBy(state.contacts.allContacts, (contact) => {
    return contact.name.first.charAt(0);
  });
}