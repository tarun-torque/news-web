import React from "react";
import Grid from '@mui/material/Grid';


export default function Hero(){
    return(
        <>
        <Grid container>

<Grid style={{border:'2px solid black',height:'20vw'}} item lg={3} xl={6} xs={8} sm={4} md={4}>
            hello
</Grid>


<Grid style={{border:'2px solid black'}} item lg={3} xs={8} sm={4} md={4}>
            hello
</Grid>

<Grid style={{border:'2px solid black'}} item lg={3} xs={8} sm={4} md={4}>
           hello
</Grid>
 

</Grid>

        </>
    )
}