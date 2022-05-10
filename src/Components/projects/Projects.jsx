import React from 'react';
//  import { makeStyles } from '@material-ui/core/styles';
// import {Table} from '@material-ui/core/Table';
// import {TableBody} from '@material-ui/core/TableBody';
// import {TableCell} from '@material-ui/core/TableCell';
// import {TableContainer} from '@material-ui/core/TableContainer';
// import {TableHead} from '@material-ui/core/TableHead';
// import {TableRow} from '@material-ui/core/TableRow';
// // import {Paper} from '@material-ui/core/Paper';
// import * as Paper from '@material-ui/core/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Projects.scss"

// import { makeStyles } from '@mui/core/makeStyles'




// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

function createData(projects, descriptions, contributors,actions) {
  return { projects, descriptions,contributors,actions };
}

const rows = [
  createData('E-commerce Website', "This is a business website to sell valuable goods across the internet.", "James Ford"),
  createData('Hosting Application', "This is a web hosting platform that sells fast hosting for affordable prices", "Samantha Thomas"),
  createData('Galaxy Star Game', "This fun video games explores the galaxy", ["David Marley", "Kevin Tim"]),
  
];


const actions = [{field:"action", headerName:"Actions",width:200, renderCell:()=>{
  return (
    <div className="cellAction">
      <div className="viewButton"> View</div>
      <div className="editButton">Edit</div>
      <div className="deleteButton"> Delete</div>
    </div>
  );

}}
];

export default function Projects() {
  // const classes = useStyles();

  return (

     <div className="container">

     <div className="header">
       <span className="project-title">Projects</span>
       <button className="project-btn"> Add Project</button>
     </div>






    <TableContainer id="tableContainer" component={Paper}>
      {/* <Table className={classes.table} aria-label="simple table"> */}
      <Table   aria-label="simple table">
      {/* <TableHead>
          <TableRow>
            <TableCell>Projects</TableCell>
            <TableCell align="right"><button>New Project</button></TableCell>
           
          </TableRow>
        </TableHead> */}
        <TableHead>
          <TableRow className="project-descriptions">
            <TableCell>Projects</TableCell>
            <TableCell align="right">Descriptions</TableCell>
            <TableCell align="right">Contributors</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.projects}>
              <TableCell component="th" scope="row">
                {row.projects}
                
              </TableCell>
              <TableCell align="right">{row.descriptions}</TableCell>
              <TableCell align="right">{row.contributors}</TableCell>
              
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}