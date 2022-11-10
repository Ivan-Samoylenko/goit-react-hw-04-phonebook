import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { localStorageAPI } from 'services';

const CONTACTS_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(
    localStorageAPI.load(CONTACTS_KEY) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorageAPI.save(CONTACTS_KEY, contacts);
  }, [contacts]);

  function handleSubmit(value) {
    setContacts(prev => [...prev, { ...value, id: nanoid(10) }]);
  }

  function onFilterChange(event) {
    setFilter(event.target.value);
  }

  function handleDeleteBtn(id) {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  }

  const lowerCaseFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter onChange={onFilterChange} value={filter} />
      <ContactList contacts={filteredContacts} onClick={handleDeleteBtn} />
    </>
  );
}
