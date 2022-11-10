import { Contacts, ContactsItem } from './ContactList.styled';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <Contacts>
      {contacts.map(contact => {
        const { name, number, id } = contact;

        return (
          <ContactsItem key={id}>
            <Contact
              name={name}
              number={number}
              onClick={() => {
                onClick(id);
              }}
            />
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
