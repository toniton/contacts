import contactService from '../services/contact.service';

export const CONTACTS_FETCHED = 'contacts.CONTACTS_FETCHED';

export function fetchContacts(params) {
  console.log('here baby');
  return async(dispatch, getState) => {
    try {
      const contactsResponse = await contactService.getAll(params);
      dispatch({ type: CONTACTS_FETCHED, allContacts: contactsResponse });
    } catch (error) {
      console.error(error);
    }
  };
}