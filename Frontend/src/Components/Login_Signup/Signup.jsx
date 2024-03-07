import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Signup() {


  const [userData,setUserData] = useState({
       'fullName':'',
       'username':'',
       'email':'',
       'country':'',
       'password':'',
       'confirmPassword':'',
  })

  const handlechange = (e)=>{
    const {name, value} = e.target;
    // console.log(name)
    // console.log(value)
   setUserData({
    ...userData,
    [name]:value,
   })

  }


  const handleformSubmit = async(e)=>{
    e.preventDefault;

    try {

      const res = await axios.post('http://localhost:5000/api/signUp',userData)
      console.log(res.data)

      setUserData({
        'fullName':'',
       'username':'',
       'email':'',
       'country':'',
       'password':'',
       'confirmPassword':'',
      })

    } catch (error) {
      
    }
  }

  return (


    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <form>

      <TextField id="outlined-basic" label="Full Name" variant="outlined" name='fullName' value={userData.fullName} onChange={handlechange} /> <br/><br/>
      <TextField id="outlined-basic" label="Username" variant="outlined"  name='username' value={userData.username} onChange={handlechange}   /> <br/><br/>
      <TextField id="outlined-basic" label="Email" variant="outlined" name='email'  value={userData.email} onChange={handlechange}  /> <br/><br/>
      <TextField id="outlined-basic" label="Country" variant="outlined" name='country' value={userData.country}  onChange={handlechange}  /> <br/><br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" name='password' value={userData.password} onChange={handlechange}   /> <br/><br/>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" name='confirmPassword' value={userData.confirmPassword}  onChange={handlechange}  /> <br/><br/>

      <Button variant="contained" onClick={handleformSubmit}>Register</Button>


      </form>

      <p>Already Registred? <Link to='/login'>Login here</Link></p>
                                   
    </Box>
  );
}