import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

const TagTable = ({ tags, headers }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 960 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableCell
                sx={{ fontWeight: '600' }}
                align={header.align}
                key={header.id}
              >
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map(tag => (
            <TableRow
              key={tag.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tag.name}
              </TableCell>
              <TableCell align="right">{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TagTable.propTypes = {
  tags: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
};

export default TagTable;
