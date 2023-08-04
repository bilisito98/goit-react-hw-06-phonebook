import { nanoid } from 'nanoid'
import { createAction } from '@reduxjs/toolkit'

const addContact = createAction('contacts/Add', (name, number) => ({
    payload: {
        id: nanoid(6),
        name,
        number,
    },
}));

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/Filter');

const contactsActions = {
  addContact,
  deleteContact,
  changeFilter
};

export default contactsActions;

