import React from "react";
import "./style.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const LoginPage =()=>{
    return(
        <>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
    
    </Box>
        
        this is a login page
        </>
    )
};

export default LoginPage;