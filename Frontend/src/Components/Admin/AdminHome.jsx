

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Hero from './Hero'

export default function PrimarySearchAppBar() {
  return(
    <>
    <div>
       <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    </div>

       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Button  variant="contained" >Create own News</Button>
       </div>

       <Hero />
    </>
  )
  
  }
              

    
