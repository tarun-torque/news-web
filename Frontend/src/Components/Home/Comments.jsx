import React from "react";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Alert from '@mui/material/Alert';


export default function Comments(){

const handleClick   = ()=>{


}

    return(
        <>

        <h1>Comments</h1>

        <div style={{display:'flex'}}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> 
        <TextField   multiline id="standard-basic" label="Your comments" variant="standard" />
        </div>

<br/>
<br/>


        <Fab variant="extended" onClick={handleClick}>
        <AddIcon />
        Post
        </Fab>

        <Alert severity="success">This is a success Alert.</Alert>


        



        </>
    )
}