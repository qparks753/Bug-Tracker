import React from "react";
import "./Widget.scss";
import { DataGrid } from "@mui/x-data-grid";

const Widget = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "Email",
      headerName: "Email",
      // type: 'string',
      width: 200,
    },
    {
      field: "Phone",
      headerName: "Phone",
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      width: 160,
      //   valueGetter: (params) =>
      //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      Email: "Jsnow@gmail.com",
      Phone: "888-888-8888",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      Email: "Clannister5@gmail.com",
      Phone: "888-888-8888",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      Email: "JLannister432@gmail.com",
      Phone: "888-888-8888",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      Email: "Arya345@gmail.com",
      Phone: "888-888-8888",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      Email: "DaeT@outlook.com",
      Phone: "888-888-8888",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: "Jen",
      Email: "Jen3@yahoo.com",
      Phone: "888-888-8888",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      Email: "Ferracliff@AOL.com",
      Phone: "888-888-8888",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      Email: "Rossi@gmail.com",
      Phone: "888-888-8888",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      Email: "Harvw@gmail.com",
      Phone: "888-888-8888",
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="top">
        <span className="tabletitle">Team</span>
        <button className="widgetbtn">Add Member</button>
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

export default Widget;
