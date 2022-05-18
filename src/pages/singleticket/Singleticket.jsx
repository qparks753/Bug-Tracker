import React from "react";
import "./Singleticket.scss";
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
// import Tickets from "../../Components/tickets/Ticketscomp";
import axios from "axios";



const Singleticket = () => {
  const { ticketid } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {

    axios.get(`http://localhost:3001/api/tickets/${ticketid}`)
    .then((response)=>{
      setTicket(response.data)
      console.log(response.data)
      
    });



  }, [ticketid]);

  if(!ticket){
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

          {/* {Tickets.map(ticket=>( */}
          <Card key={ticket.id} sx={{ minWidth: 600,  textAlign:"center" }}> {/*275*/}
            <CardContent >
              <Typography
                sx={{ fontSize: 18 }}           
                color="text.secondary"
                //  {/*14*/}
                gutterBottom
              >
               ID: {ticket.id}
                {/* ID: 4 */}
              </Typography>
              <Typography variant="h5" component="div">
                Title: {ticket.Ticket_Title}
                {/* Error Code */}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {/* There is an error that prevent the user from logging in. */}
                Description: {ticket.Description}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {/* Status: OPEN */}
               Status:  {ticket.Ticket_status}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
               {/* Type: Error */}
                Type: {ticket.Ticket_type}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {/* Priority: Medium */}
                 Priority: {ticket.Priority}
   
              </Typography>
              <Typography variant="body2">
               
                <br />
               
              </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"center"}}>
              <Button id="singlebtn" size="small" > Return</Button>
            </CardActions>
          </Card>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Singleticket;