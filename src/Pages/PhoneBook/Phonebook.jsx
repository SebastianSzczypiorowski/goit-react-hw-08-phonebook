import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'components/redux/phonebook/selectors';
import { fetchContacts } from 'components/redux/phonebook/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';

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
