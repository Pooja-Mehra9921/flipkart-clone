import React from "react";
import "./style.css";
import { Box, Paper } from "@mui/material";
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
      <Box className="clone-icon">
        <CloseIcon/>
      </Box>

    </Box>
  </Paper>
</Box>
      </Box>
        
     
        </>
    )
};

export default LoginPage;