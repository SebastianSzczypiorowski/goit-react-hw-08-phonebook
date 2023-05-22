import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/phonebook/operations';
import { setFilters } from 'components/redux/phonebook/filtersSlice';
import { getContacts, getFilter } from 'components/redux/phonebook/selectors';
import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  const handleFilterUpdate = e => {
    e.preventDefault();
    dispatch(setFilters(e.target.value));
  };
  return (
    <div className={css.contactList}>
      <div className={css.filter}>
        <label htmlFor="filter-input">Find contacts by name</label>
        <input
          id="filter-input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Filter"
          onChange={handleFilterUpdate}
        />
      </div>
      <ul>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={css.item}>
              {/* <img src="../../Img/placeholder.jpg" alt="contact img" /> */}
              {contact.name} {contact.number}
              <button
                className={css.listButton}
                type="button"
                name={contact.name}
                onClick={() => {
                  handleDelete(contact.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
