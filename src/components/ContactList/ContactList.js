import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { getFilterValue, getContacts } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import { useEffect } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <>
      {contacts.length > 0 && (
        <ul>
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={phone}
            ></ContactItem>
          ))}
        </ul>
      )}
    </>
  );
}
