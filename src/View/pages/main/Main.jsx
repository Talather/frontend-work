// import { Margin } from '@mui/icons-material'
import React from 'react'
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const Main = () => {
  return (
    <div style={{ height: "100vh", width: "280vh", background: "#1A1A24", color: "#1A1A24", }}>


     <Button variant="contained">Hello world</Button>;
     
       <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
     
        <TextField
          InputLabelProps={{
            style: {
              color: 'white', // Default label color
              fontWeight: 'bold', // Change font weight
              fontSize: '18px', // Change font size
            },
          }}
      
          
          
          
          sx={{
    '& label': {
      color: 'white', // Default label color
    },
    '& label.Mui-focused': {
      color: 'white', // Label color when focused
    },
    '& label.MuiFormLabel-filled': {
      color: 'white', // Label color when input is filled
    },
  }} variant="standard" />
    </Box>
        {/* <TextField id="standard-basic" color="success" label="Standard" variant="standard" /> */}
        <p>chutiya</p>
        
   
   {/* <TextField id="standard-basic" label="Standard" variant="standard" color="white" /> */}

       
    
    
    </div>
  )
}

export default Main