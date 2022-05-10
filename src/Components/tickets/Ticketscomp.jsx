import React from "react";
import "./ticketscomp.scss";
import { DataGrid } from "@mui/x-data-grid";

const Tickets = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "TicketTitle", headerName: "Ticket Title", width: 180 },
    { field: "Author", headerName: "Author", width: 180 },
    {
      field: "Description",
      headerName: "Description",
      maxWidth:1000,
      width:500
     
      // type: 'string',
      // width: 500,
    },
  ];

  const rows = [
    {
      id: 1,
      TicketTitle:"Error",
      Author: "Jennifer Snow",
      Description: "There is a error code"

    },
    {
        id: 2,
        TicketTitle:"Error",
        Author: "Jennifer Snow",
        Description: "There is a error code"
    },
    {
        id: 3,
        TicketTitle:"Error",
        Author: "Jennifer Snow",
        Description: "There is a error code"
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
    <div style={{ height: 400, width: "90%" }}>
      <div className="top">
        <span className="tabletitle">Tickets</span>
        <button className="widgetbtn">New Ticket</button>
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

export default Tickets;