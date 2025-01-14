import React from "react";
import "./style.css";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import FLIPKART_IMAGE from "../../assents/images/flipkart-image.png";
import CloseIcon from '@mui/icons-material/Close';


const LoginPage =()=>{
const FLIPKART_IMAGE_STYLING ={
  backgroundImage : `url(${FLIPKART_IMAGE})`,
  height: "400px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  margin:"0",
  padding:"0",

}


    return(
        <>
<Box className="login-container">
  <Paper elevation={20} className="login-paper">
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6} className="fk-left-sec">
        <Box style={FLIPKART_IMAGE_STYLING}></Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} className="fk-right-sec">right</Grid>
    </Grid>
  </Paper>
</Box>

    
        
     
        </>
    )
};

export default LoginPage;