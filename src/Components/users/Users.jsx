import React,{useEffect,useState} from "react";
import "./Users.scss";
import { DataGrid } from "@mui/x-data-grid";
import {Link,useNavigate} from "react-router-dom"

const Users= () => {

  const [users,setUsers] = useState([]);

  useEffect(()=>{
   fetch("url")
   .then(res=>res.json)
   .then(data => setUsers(data))
   .catch(e => alert(e.message))
  },[])


  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 180 },
    { field: "lastName", headerName: "Last name", width: 200 },
    {
      field: "Email",
      headerName: "Email",
      // type: 'string',
      width: 300,
    },
    {
      field: "Phone",
      headerName: "Phone",
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      width: 250,
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

  const actions = [{field:"action", headerName:"Actions",width:200, renderCell:()=>{
    return (
      <div className="cellAction">
        <div className="viewButton"><Link to={`/users/${users.ID}`}></Link> View</div>
        <div className="editButton"><Link to={`/users/updateuser/${users.ID}`}></Link>Edit</div>
        <div className="deleteButton"> Delete</div>
      </div>
    );
  
  }}
  ];

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/users/adduser`; 
    navigate(path);
  }

  return (
    <div style={{ height: 400, width: "90%" }}>
      <div className="top">
        <span className="tabletitle">Team</span>
        <button onClick={routeChange} className="widgetbtn">Add User</button>
      </div>
      <DataGrid
        rows={rows} //will be users when api works
        columns={columns.concat(actions)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Users;