import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">BugTracker</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Addticket() {
  const handleSubmit = (event) => {
    //undo
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [status, setStatus] = React.useState("");
  const [type, setType] = React.useState("");
  const [priority, setPriority] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
    setType(event.target.value);
    setPriority(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ConfirmationNumberIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Ticket
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Ticket Title"
                  name="Ticket Title"
                  required
                  fullWidth
                  id="Ticket Title"
                  label="Ticket Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Author"
                  label="Author"
                  name="Author"
                  autoComplete="Author"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Description"
                  label="Description"
                  name="Description"
                  autoComplete="Description"
                />
              </Grid>

               <div id="boxdiv" style={{display:"flex", alignItems:"center",  marginTop:"15px", gap:"30px" }}>
              <Box sx={{ minWidth: 130}}>
                <FormControl fullWidth>
                  <InputLabel id="simple-select-label">
                    Ticket Status
                  </InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={status}
                    label="Ticket Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Open"}>Open</MenuItem>
                    <MenuItem value={"In Progress"}>In Progress</MenuItem>
                    <MenuItem value={"Closed"}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth >
                  <InputLabel id="simple-select-label">Ticket Type</InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={type}
                    label="Ticket Type"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Error"}>Error</MenuItem>
                    <MenuItem value={"Support"}>Support</MenuItem>
                    <MenuItem value={"Software"}>Software</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="simple-select-label">Priority</InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={priority}
                    label="Priority"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Low"}>Low</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              </div>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add New Ticket
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
