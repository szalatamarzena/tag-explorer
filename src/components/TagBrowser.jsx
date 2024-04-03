import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import SortBySelect from './SortBySelect';
import SortDirectionButton from './SortDirectionButton';
import TagPerPage from './TagPerPage';
import useTagStore from '../stores/TagStore';
import TagTable from './TagTable';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import Alert from '@mui/material/Alert';
import TagPagination from './TagPagination';

const TagBrowser = () => {
  const { perPage, sortBy, sortDirection, page, setPage } = useTagStore(
    state => ({
      perPage: state.perPage,
      sortBy: state.sortBy,
      page: state.page,
      setPage: state.setPage,
      sortDirection: state.sortDirection,
    }),
  );

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ['getTags', perPage, page],
    queryFn: async () => {
      // delay data fetching by 2s so that the loader is visible
      await new Promise(resolve => setTimeout(() => resolve(), 2000));

      return fetch(
        `https://api.stackexchange.com/2.3/tags?&order=desc&sort=name&site=stackoverflow&pagesize=${perPage}&page=${page}&filter=!nNPvSNVZJS`,
      ).then(res => res.json());
    },
    placeholderData: prev => prev,
  });

  const isUpadting = useMemo(
    () => !isLoading && isFetching,
    [isLoading, isFetching],
  );

  const pageCount = useMemo(
    () => (data ? Math.ceil(data.total / perPage) : 0),
    [data, perPage],
  );

  const sortedTags = useMemo(() => {
    if (!data) {
      return [];
    }

    let sorted = [...data.items];
    if (sortBy === 'name') {
      sorted = sorted.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (sortDirection === 'asc') {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
    } else if (sortBy === 'count') {
      sorted = sorted.sort((a, b) => {
        if (sortDirection === 'asc') {
          return a.count - b.count;
        } else {
          return b.count - a.count;
        }
      });
    }
    return sorted;
  }, [data, sortBy, sortDirection]);

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 1, height: 600 }}
      >
        <Fade
          in={isLoading}
          style={{
            transitionDelay: isLoading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity="error">
        Wystąpił błąd podczas przetwarzania. Prosimy spróbować ponownie.
      </Alert>
    );
  }

  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{ width: 1, gap: 4 }}
      spacing={2}
    >
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Przeglądarka tagów StackOverflow
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <TagPerPage label="Liczba elementów na stronie" />
        <SortBySelect
          placeholder="Wybierz kolumnę"
          options={[
            { id: 'name', label: 'Nazwa Tagu' },
            { id: 'count', label: 'Liczba Wystąpień' },
          ]}
        />
        <SortDirectionButton />
      </Stack>
      {isUpadting ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ width: 1, height: 300 }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TagTable
          tags={sortedTags}
          headers={[
            { id: 'name', label: 'Nazwa Tagu', align: 'left' },
            { id: 'count', label: 'Liczba Wystąpień', align: 'right' },
          ]}
        />
      )}
      <TagPagination pageCount={pageCount} onPageChange={handlePageChange} />
    </Box>
  );
};

export default TagBrowser;
