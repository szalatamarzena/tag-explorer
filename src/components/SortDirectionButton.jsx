import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '@mui/material/Button';
import useTagStore from '../stores/TagStore';

const SortDirectionButton = () => {
  const { sortDirection, setSortDirection } = useTagStore(state => ({
    sortDirection: state.sortDirection,
    setSortDirection: state.setSortDirection,
  }));

  const handleSortDirectionChange = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Button onClick={handleSortDirectionChange} variant="outlined" size="large">
      {sortDirection === 'asc' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
    </Button>
  );
};

export default SortDirectionButton;
