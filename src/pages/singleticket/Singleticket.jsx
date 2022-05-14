import React from "react";
// import "./Singleuser.scss";
import "./Singleticket.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Projects from "../../Components/projects/Projects2";
// import { alignProperty } from "@mui/material/styles/cssUtils";

const Singleticket = () => {
//   const { projectid } = useParams();
//   const [project, setProject] = useState(null);

  // useEffect(() => {

  //   fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
  //     .then(res => res.json())
  //     .then(data => setProject(data))
  //     .catch(e=>alert(e.message));

  // }, [peopleid]);

  // if(!project){
  //   return <h1 className="mt-2 d-flex justify-content-center">Loading...</h1>;
  // };

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
          <Card sx={{ minWidth: 600,  textAlign:"center" }}> {/*275*/}
            <CardContent >
              <Typography
                sx={{ fontSize: 18 }}           
                color="text.secondary"
                //  {/*14*/}
                gutterBottom
              >
                {/* {tickets.id} */}
                ID: 4
              </Typography>
              <Typography variant="h5" component="div">
                {/* {tickets.Ticket Title} */}
                Error Code
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                There is an error that prevent the user from logging in.
                {/* {ticket.description} */}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Status: OPEN
                {/* {ticket.Ticket_status} */}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
               Type: Error
                {/* {ticket.Ticket_Type} */}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Priority: Medium

                {/* {ticket.Priority} */}
              </Typography>
              <Typography variant="body2">
                {/* well meaning and kindly. */}
                <br />
                {/* {'"a benevolent smile"'} */}
              </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"center"}}>
              <Button id="singlebtn" size="small" >Learn More Return</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Singleticket;