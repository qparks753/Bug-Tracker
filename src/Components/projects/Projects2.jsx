import React,{useEffect,useState} from "react";
// import "./ticketscomp.scss";
import { DataGrid } from "@mui/x-data-grid";
import "./Projects.scss"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";


const Projects = () => {


  const [projects,setProjects] = useState([]);
  const [selection,setSelection] = useState([]);

  useEffect(()=>{
 
    axios.get("http://localhost:3001/api/projects/allProjects")
    .then((response)=>{
      setProjects(response.data)
      console.log(response.data)
    });


  
},[])

  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "Project", headerName: "Projects", width: 150 },
    { field: "Contributors", headerName: "Contributors", width: 300 },
    {
      field: "Project_Description",
      headerName: "Description",
      maxWidth:1000,
      width:400
      
      // type: 'string',
      // width: 500,
    },
  ];

  // const rows = [
  //   {
  //     id: 1,
  //     ProjectTitle:"E-commerce Website",
  //     Contributors: "James Ford",
  //     Description:  "This is a business website to sell valuable goods across the internet."

  //   },
  //   {
  //       id: 2,
  //       ProjectTitle:"Hosting Application",
  //       Contributors: "Samantha Thomas",
  //       Description:  "This is a web hosting platform that sells fast hosting for affordable prices"
  //   },
  //   {
  //       id: 3,
  //       ProjectTitle:"Galaxy Star Game",
  //       Contributors: ["David Marley", "Kevin Tim"],
  //       Description:  "This fun video games explores the galaxy"
  //   }
  // ];

  const actions = [{field:"action", headerName:"Actions",width:200, renderCell:()=>{
    return (
      <div className="cellAction">
        {/* <div className="viewButton"><Link to={`/1`}></Link> View</div> */}
        <div className="viewButton" > View</div>
        <div className="editButton"><Link to={`/updateproject/${projects.ID}`}></Link>Edit</div>
        <div className="deleteButton"> Delete</div>
      </div>
    );
  
  }}
  ];

  // add project
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `./projects/addproject`; 
    navigate(path);
  }

  // view specific project
  let  navigate2 = useNavigate(); 
  const routeChange2 = () =>{ 
    let path = `/${9}`; 
    navigate2(path);
  }


  


  return (
    <div style={{ height: 400, width: "90%",margin:15 }} >
        
      <div className="top">
        <span className="tabletitle">Projects</span>
        <button onClick={routeChange} className="widgetbtn">New Projects</button>
      </div>
      <DataGrid
        rows={projects}  // will be tickets when api works
        columns={columns.concat(actions)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection ={true}
        onSelectionModelChange={(id)=>{
           
        }}
        
        
        
        
       
      
      />
    </div>

   
  );
};

export default Projects;