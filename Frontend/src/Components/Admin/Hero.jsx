import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import axios from 'axios';

export default function Hero(){
    const[users,setUsers] = useState([]) ;

const allUsers = async ()=>{
  
    try {

        const res = await axios.get('/all/api/users') ;
        console.log(res.data)
        setUsers(res.data);
        
    } catch (error) {
        console.log(error)   
    }

}

useEffect(()=>{
      allUsers();
},[])





    return(
        <>
        <Grid container>

<Grid style={{border:'2px solid black',height:'20vw'}} item lg={3} xl={6} xs={8} sm={4} md={4}>
            This container is for total numbers of users in the websites
</Grid>


<Grid style={{border:'2px solid black'}} item lg={3} xs={8} sm={4} md={4}>
            This container is for number of new post today
</Grid>

<Grid style={{border:'2px solid black'}} item lg={3} xs={8} sm={4} md={4}>
           this is for total number of news posted by admin/subadmin
</Grid>
</Grid>





     {/* <div>
      <h1>User List</h1>
      <ul>
        {users && users.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div> */}










        </>
    )
}