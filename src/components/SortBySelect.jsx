import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useTagStore from '../stores/TagStore';
import PropTypes from 'prop-types';

const SortBySelect = ({ placeholder = 'Placeholder', options }) => {
  const { sortBy, setSortBy } = useTagStore(state => ({
    sortBy: state.sortBy,
    setSortBy: state.setSortBy,
  }));

  const handleSelectChange = event => {
    setSortBy(event.target.value);
  };

  return (
    <Select
      value={sortBy}
      onChange={handleSelectChange}
      displayEmpty
      size="small"
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value="" disabled>
        {placeholder}
      </MenuItem>
      {options.map(header => (
        <MenuItem key={header.id} value={header.id}>
          {header.label}
        </MenuItem>
      ))}
    </Select>
  );
};

SortBySelect.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default SortBySelect;
