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
import "./Projects.scss"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"


// import { makeStyles } from '@mui/core/makeStyles'




// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(ID,projects, descriptions, contributors,actions) {
//   return { ID, projects, descriptions,contributors,actions };
// }

//    const rows = [
//    createData(1,'E-commerce Website', "This is a business website to sell valuable goods across the internet.", "James Ford"),
//    createData(2,'Hosting Application', "This is a web hosting platform that sells fast hosting for affordable prices", "Samantha Thomas"),
//    createData(3,'Galaxy Star Game', "This fun video games explores the galaxy", ["David Marley", "Kevin Tim"]),
  
// ];


export default function Projects() {
  // const classes = useStyles();
  const [projects,setProjects] = useState([]);

  useEffect(()=>{
 
    axios.get("http://localhost:3001/api/projects/allProjects")
    .then((response)=>{
      setProjects(response.data)
      console.log(response.data)
    });


  
},[])


let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `./projects/addproject`; 
  navigate(path);
}


  return (

     <div className="container">

     <div className="header" style={{display:"flex", justifyContent:"space-evenly", marginTop:"25px"}}>
       <span className="project-title">Projects</span>
       <button className="project-btn" onClick={routeChange} > Add Project</button>
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
            <TableCell align="center">Projects</TableCell>
            <TableCell align="center">Descriptions</TableCell>
            <TableCell align="center">Contributors</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
               <TableCell align="right">{project.id}</TableCell>
              <TableCell component="th" scope="row">
                {project.Project}
                
              </TableCell>
              <TableCell align="right">{project.Project_Description}</TableCell>
              <TableCell align="right">{project.Contributors}</TableCell>
              <TableCell align="right">
                {
              <div className="cellAction">

                <Link className="viewButton" to={`/${project.id}`}>View</Link>
                <Link className="viewButton" to={`/projects/updateproject/${project.id}`}>Edit</Link>
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