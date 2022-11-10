import { FilterWraper, FilterName, FilterField } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterWraper>
      <FilterName>Find contacts by name</FilterName>
      <FilterField onChange={onChange} value={value} />
    </FilterWraper>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
