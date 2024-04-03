import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import useTagStore from '../stores/TagStore';
import PropTypes from 'prop-types';

const TagPagination = ({ pageCount, onPageChange }) => {
  const { page } = useTagStore(state => ({
    page: state.page,
  }));

  const handlePageChange = (event, newPage) => {
    onPageChange(newPage);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        page={page}
        count={pageCount}
        onChange={handlePageChange}
        color="primary"
      />
    </Stack>
  );
};

TagPagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default TagPagination;
