import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'components/redux/selectors';
import { fetchContacts } from 'components/redux/operations';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="phonebook-container">
      <ContactForm />

      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default Phonebook;
