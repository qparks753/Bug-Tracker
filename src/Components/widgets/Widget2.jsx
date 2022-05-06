import React from "react";
import "./Widget.scss";
import { DataGrid } from "@mui/x-data-grid";

const Widget2 = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "TicketTitle", headerName: "Ticket Title", width: 130 },
    { field: "Author", headerName: "Author", width: 130 },
    {
      field: "Description",
      headerName: "Description",
      // type: 'string',
      width: 500,
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

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="top">
        <span className="tabletitle">Tickets</span>
        <button className="widgetbtn">New Ticket</button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Widget2;