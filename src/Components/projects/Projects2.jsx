import React from "react";
// import "./ticketscomp.scss";
import { DataGrid } from "@mui/x-data-grid";
import "./Projects.scss"

const Projects = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "ProjectTitle", headerName: "Projects", width: 150 },
    { field: "Contributors", headerName: "Contributors", width: 300 },
    {
      field: "Description",
      headerName: "Description",
      maxWidth:1000,
      width:400
     
      // type: 'string',
      // width: 500,
    },
  ];

  const rows = [
    {
      id: 1,
      ProjectTitle:"E-commerce Website",
      Contributors: "James Ford",
      Description:  "This is a business website to sell valuable goods across the internet."

    },
    {
        id: 2,
        ProjectTitle:"Hosting Application",
        Contributors: "Samantha Thomas",
        Description:  "This is a web hosting platform that sells fast hosting for affordable prices"
    },
    {
        id: 3,
        ProjectTitle:"Galaxy Star Game",
        Contributors: ["David Marley", "Kevin Tim"],
        Description:  "This fun video games explores the galaxy"
    }
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

  return (
    <div style={{ height: 400, width: "90%",margin:15 }} >
        
      <div className="top">
        <span className="tabletitle">Projects</span>
        <button className="widgetbtn">New Projects</button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actions)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
   
  );
};

export default Projects;