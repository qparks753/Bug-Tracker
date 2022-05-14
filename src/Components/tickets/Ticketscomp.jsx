import React, { useEffect, useState } from "react";
import "./ticketscomp.scss";
import { DataGrid } from "@mui/x-data-grid";
import {Link} from "react-router-dom"




const Tickets = () => {

  const [tickets,setTickets] = useState([]);

  useEffect(()=>{
   fetch("url")
   .then(res=>res.json)
   .then(data => setTickets(data))
   .catch(e => alert(e.message))
  },[])


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
    { field: "TicketStatus", headerName: "Ticket Status", width: 100 },
    { field: "TicketType", headerName: "Ticket Type", width: 100 },
    { field: "Priority", headerName: "Priority", width: 100 },
  ];

  const rows = [
    {
      id: 1,
      TicketTitle:"Error",
      Author: "Jennifer Snow",
      Description: "There is a error code",
      TicketStatus: "OPEN",
      TicketType: "Error Code",
      Priority: "Medium"

    },
    {
        id: 2,
        TicketTitle:"Error",
        Author: "Jennifer Snow",
        Description: "There is a error code",
        TicketStatus: "OPEN",
        TicketType: "Error Code",
        Priority: "Medium"
    },
    {
        id: 3,
        TicketTitle:"Error",
        Author: "Jennifer Snow",
        Description: "There is a error code",
        TicketStatus: "OPEN",
        TicketType: "Error Code",
        Priority: "Medium"
    }
  ];

  const actions = [{field:"action", headerName:"Actions",width:200, renderCell:()=>{
    return (
      <div className="cellAction">
        <div className="viewButton"><Link to={`/tickets/${tickets.ID}`}></Link> View</div>
        <div className="editButton"><Link to={`/tickets/updateticket/${tickets.ID}`}></Link>Edit</div>
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
        rows={rows} //will be tickets when api works
        columns={columns.concat(actions)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Tickets;