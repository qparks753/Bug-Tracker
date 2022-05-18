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
import "./Users.scss"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"




export default function Projects() {
  
  const [users,setUsers] = useState([]);

  useEffect(()=>{
 
    axios.get("http://localhost:3001/api/users/allUsers")
    .then((response)=>{
      setUsers(response.data)
      console.log(response.data)
    });


  
},[])


let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `./adduser`; 
  navigate(path);
}


  return (

     <div className="container">

     <div className="header" style={{display:"flex", justifyContent:"space-evenly", marginTop:"25px"}}>
       <span className="project-title">Users</span>
       <button className="project-btn" onClick={routeChange} > Add User</button>
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
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
               <TableCell align="right">{user.id}</TableCell>
              <TableCell component="th" scope="row">
                {user.FirstName}
                
              </TableCell>
              <TableCell align="right">{user.LastName}</TableCell>
              <TableCell align="right">{user.Email}</TableCell>
              <TableCell align="right">{user.Phone}</TableCell>
              <TableCell align="right">
                {
              <div className="cellAction">

                <Link className="viewButton" to={`/users/${user.id}`}>View</Link>
                <Link className="viewButton" to={`/users/updateuser/${user.id}`}>Edit</Link>

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