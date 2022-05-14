import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" >
        BugTracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Editproject() {
  const handleSubmit = (event) => { //undo
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  
  const [contributors, setContributors] = React.useState([]);
 

  const handleChange = (event) => {
    setContributors(event.target.value);
    
  };
 


  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <Box
       
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountTreeIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Project
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,mr:7 }}    >
            <div className="inputContainer" >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="Project"
                  required
                  fullWidth
                  id="Project"
                  label=" New Project Title"
                  autoFocus
                />
              </Grid>


              <Box sx={{ minWidth: 200}} style={{  marginTop:"20px", marginLeft:"80px"}}>
                <FormControl fullWidth>
                  <InputLabel id="simple-select-label" >Contributors</InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={contributors}
                    label=" Contributors"
                    onChange={handleChange}
                    multiple={true}
                    //Make sure to set the value of select as an array. Otherwise, It will not work
                  >
  
                    <MenuItem value={"Jane Doe"}>Jane Doe</MenuItem>
                    <MenuItem value={"Larry Davis"}>Larry Davis</MenuItem>
                    <MenuItem value={"Jeremy Thomas"}>Jeremy Thomas</MenuItem>
                  </Select>
                </FormControl>
              </Box>


              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="Product_Description"
                  label=" New Product Description"
                  name="Product_Description"
                  autoComplete="Product_Description"
                />
              </Grid>
             
              
             
            </Grid>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Project
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}