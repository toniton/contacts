import contactReducer from './contacts.reducer';
import * as types from '../actions/contacts.action';
import Immutable from 'seamless-immutable';

let initialState = null;

beforeEach(()=>{
  initialState = Immutable({
    allContacts: [],
  });
})

describe('contact reducer', () => {
  it('should return the initial state', () => {
    expect(contactReducer(undefined, {})).toEqual({
      allContacts: [],
    });
  })

  it('should return the new state with action data allContacts', () => {
    expect(contactReducer(initialState, {
      type: types.CONTACTS_FETCHED,
      allContacts: ['adio']
    })).toEqual({
      allContacts: ['adio'],
    });
  })
});