import React from "react";
import "./style.css";
import { Box, Paper, Typography } from "@mui/material";
import FLIPKART_IMAGE from "../../assents/images/flipkart-image.png";
import CloseIcon from '@mui/icons-material/Close';


const LoginPage =()=>{



    return(
        <>
      <Box className="main-container">
<Box>
  <Paper className="login-container" elevation={3}>

    <Box className="left-flipkart-section">
      <img style={{width:"100%", height:"100%"}} src={FLIPKART_IMAGE} alt="flipkart-image" />
    </Box>
    <Box className="right-flipkart-section">
      <Box className="close-icon">
        <CloseIcon/>
      </Box>
     
     <Box className="text-container">
      <Typography style={{fontWeight:"600"}} variant="body">Login</Typography>
      <Typography variant="body1">Get access to your orders, whishlist and Recommendations</Typography>
     </Box>
    </Box>
  </Paper>
</Box>
      </Box>
        
     
        </>
    )
};

export default LoginPage;