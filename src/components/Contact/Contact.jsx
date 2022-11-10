import { Name, Phone, DeleteBtn } from './Contact.styled';
import { TiDocumentDelete } from 'react-icons/ti';
import PropTypes from 'prop-types';

export const Contact = ({ name, number, onClick }) => {
  return (
    <>
      <Name>{name}</Name>
      <Phone>{number}</Phone>
      <DeleteBtn onClick={onClick}>
        <TiDocumentDelete size="30" />
        delete
      </DeleteBtn>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
