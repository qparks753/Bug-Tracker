import React from "react";
import "./Singleuser.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Projects from "../../Components/projects/Projects2";
// import { alignProperty } from "@mui/material/styles/cssUtils";
import axios from "axios"

const Singleuser = () => {
  const { userid } = useParams();
  const [user, setUser] = useState(null);

  useEffect(()=>{
    axios.get(`http://localhost:3001/api/users/${userid}`)
    .then((response)=>{
      setUser(response.data)
      console.log(response.data)
    });

},[userid]);

  if(!user){
    return <h1 className="mt-2 d-flex justify-content-center">Loading...</h1>;
  };

//   const bull = (
//     <Box
//       component="span"
//       sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//     >
//       •
//     </Box>
//   );

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {/* Single */}
        <div className="ticketitem">

        {/* {user.map(user=>(  */}
          <Card sx={{ minWidth: 600,  textAlign:"center" }}> {/*275*/}
            <CardContent >
              <Typography
                sx={{ fontSize: 18 }}           
                color="text.secondary"
                //  {/*14*/}
                gutterBottom
              >  
                {user.id}
                {/* ID: 4 */}
              </Typography>
              <Typography variant="h5" component="div">
                {user.FirstName}
                {/* First Name: Jon  */}
              </Typography>
              <Typography variant="h5" sx={{ mb: 1.5 }} >
               {/* Last Name:  Snow */}
                {user.LastName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {/* Email: Jsnow@gmail.com */}
                {user.Email}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {/* Phone : 888-888-8888 */}

                {user.Phone}
              </Typography>
              
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"center"}}>
              <Button id="singlebtn" size="small" >Learn More Return</Button>
            </CardActions>
          </Card>
           {/* ))}  */}
        </div>
      </div>
    </div>
  );
  };

export default Singleuser