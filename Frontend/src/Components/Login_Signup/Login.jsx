import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";



export default function Login(){
    return(
        <>
          
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" /> <br/> <br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" /><br/>
      <Link>Forgot Password</Link>


      <br/><br/>

      
    </Box>
      <Button variant="contained">Login</Button>

      <p>Not Registered yet? <Link to='/signup'>Register here</Link></p>

        </>
    )
}