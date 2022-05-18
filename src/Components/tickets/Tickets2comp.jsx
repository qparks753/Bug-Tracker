import React, {useEffect,useState} from 'react';
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
import "./ticketscomp.scss"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"




export default function Tickets2comp() {
    const [tickets,setTickets] = useState([]);

  useEffect(()=>{
 
    axios.get("http://localhost:3001/api/tickets/allTickets")
    .then((response)=>{
      setTickets(response.data)
      console.log(response.data)
     
    });


  
},[])


let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `./addticket`; 
  navigate(path);
}


  return (

     <div className="container">

     <div className="header" style={{display:"flex", justifyContent:"space-evenly", marginTop:"25px"}}>
       <span className="project-title">Tickets</span>
       <button className="project-btn" onClick={routeChange} > Add Ticket</button>
     </div>






    <TableContainer id="tableContainer" style={{width:"95vh", margin:"10px 10px 20px 200px", border:"1px solid black"}} component={Paper}>
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
          <TableCell align="center">ID</TableCell>
            <TableCell align="center">Ticket</TableCell>
            <TableCell align="center">Authors</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Ticket Status</TableCell>
            <TableCell align="center">Ticket Type</TableCell>
            <TableCell align="center">Ticket Priority</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
               <TableCell align="right">{ticket.id}</TableCell>
              <TableCell component="th" scope="row">
                {ticket.Ticket_Title}
                
              </TableCell>
              <TableCell align="right">{ticket.Author}</TableCell>
              <TableCell align="right">{ticket.Description}</TableCell>
              <TableCell align="right">{ticket.Ticket_status}</TableCell>
              <TableCell align="right">{ticket.Ticket_type}</TableCell>
              <TableCell align="right">{ticket.Priority}</TableCell>
              <TableCell align="right">
                {
              <div className="cellAction">

                <Link className="viewButton" to={`/tickets/${ticket.id}`}>View</Link>
                <Link className="viewButton" to={`/tickets/updateticket/${ticket.id}`}>Edit</Link>
                <div className="deleteButton "> Delete</div>
                </div>
                  }
              </TableCell>

              
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}