import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// 거리 계산
// function computeDistance(startCoords, destCoords) {
//     var startLatRads = degreesToRadians(startCoords.latitude);
//     var startLongRads = degreesToRadians(startCoords.longitude);
//     var destLatRads = degreesToRadians(destCoords.latitude);
//     var destLongRads = degreesToRadians(destCoords.longitude);

//     var Radius = 6371; //지구의 반경(km)
//     var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
//                     Math.cos(startLatRads) * Math.cos(destLatRads) *
//                     Math.cos(startLongRads - destLongRads)) * Radius;

//     return distance;
// }

// function degreesToRadians(degrees) {
//     return degrees * Math.PI / 180;
// }

function createData(name, lattitude, longitude, distance) {
  return { name, lattitude, longitude, distance};
}

const rows = [
  createData('서울', 37.5666805, 126.9784147),
  createData('대전', 36.35111, 127.38500),
  createData('대구', 35.85, 128.56),
  createData('부산', 35.17944, 129.07556),
  createData('인천', 37.45639, 126.70528),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
    <h1>참조</h1>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>지역(시청기준)</StyledTableCell>
            <StyledTableCell align="right">위도</StyledTableCell>
            <StyledTableCell align="right">경도</StyledTableCell>
            {/* <StyledTableCell align="right">직선거리</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.lattitude}</StyledTableCell>
              <StyledTableCell align="right">{row.longitude}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.distance}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}