import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [userData, setUserData] = useState({
        fullName: '',
        username: '',
        email: '',
        country: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(userData)
            const res = await axios.post('http://localhost:4000/signUp', userData);
            console.log(res.data);
            setUserData({
                fullName: '',
                username: '',
                email: '',
                country: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
            <form>
                <TextField id="fullName" label="Full Name" variant="outlined" name="fullName" value={userData.fullName} onChange={handleChange} /> <br/><br/>
                <TextField id="username" label="Username" variant="outlined" name="username" value={userData.username} onChange={handleChange} /> <br/><br/>
                <TextField id="email" label="Email" variant="outlined" name="email" value={userData.email} onChange={handleChange} /> <br/><br/>
                <TextField id="country" label="Country" variant="outlined" name="country" value={userData.country} onChange={handleChange} /> <br/><br/>
                <TextField id="password" label="Password" variant="outlined" name="password" value={userData.password} onChange={handleChange} /> <br/><br/>
                <TextField id="confirmPassword" label="Confirm Password" variant="outlined" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} /> <br/><br/>

                <Button variant="contained" onClick={handleFormSubmit}>Register</Button>
            </form>

            <p>Already Registered? <Link to="/login">Login here</Link></p>
        </Box>
    );
}
