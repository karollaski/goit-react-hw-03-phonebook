import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={css.contactList}>
    {contacts &&
      contacts.map(contact => (
        <li className={css.contactList__item} key={contact.id}>
          {contact.name + ': ' + contact.number}
          <button
            className={css.contactList__btn}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
