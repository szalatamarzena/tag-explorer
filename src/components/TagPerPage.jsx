import TextField from '@mui/material/TextField';
import useTagStore from '../stores/TagStore';
import PropTypes from 'prop-types';

const TagPerPage = ({ label }) => {
  const { perPage, setPerPage, setPage } = useTagStore(state => ({
    perPage: state.perPage,
    setPerPage: state.setPerPage,
    setPage: state.setPage,
  }));

  const handlePerPageChange = event => {
    const newPerPage = event.target.value;
    setPerPage(newPerPage);
    setPage(1);
  };

  return (
    <TextField
      label={label}
      type="number"
      value={perPage}
      size="small"
      onChange={handlePerPageChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

TagPerPage.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TagPerPage;
