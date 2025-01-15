import React, { useState } from "react";
import "./style.css";
import { Box, Button, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import FLIPKART_IMAGE from "../../assents/images/flipkart-image.png";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ReCAPTCHA from "react-google-recaptcha";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


const LoginPage =()=>{

const [show, setshow] = useState(true);
const [email, setemail] = useState("");


const CREDENCIAL_FOR_LOGIN ={
  email:"user123@gmail.com",
  password:"user1234",
}

const handleEmail=(e)=>{
console.log("inputttt element----", e.target.value);
}

const handlePasswordicon =()=>{
  console.log("i goott click----");
  setshow(!show);
}

const FLIPKART_IMAGE_STYLING ={
  backgroundImage : `url(${FLIPKART_IMAGE})`,
  height: "500px",
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
      <Grid item xs={12} sm={12} md={6} lg={6} className="fk-right-sec">
        <Box style={{ textAlign:"end", cursor:"pointer"}}><CancelOutlinedIcon/></Box>
        <Typography variant="h6" style={{fontWeight:"600", marginTop:"5px"}}>Login</Typography>
        <Typography variant="body" style={{fontSize:"12px", color:"grey"}}>Get access to yours Orders, Whishlists and Recommandations</Typography>   

        <Typography variant="body2" style={{fontWeight:"600", fontSize:"12px", marginTop:"40px"}}>Enter Email</Typography>
        <TextField 
        id="emailfield"
        fullWidth
        size="small"
        type="email"
        slotProps={{
          input: {
            endAdornment: <InputAdornment style={{cursor:"pointer"}} position="end">
              <EmailOutlinedIcon/>
            </InputAdornment>,
          },
        }}

        onChange={handleEmail}
        /> 
        <Typography variant="body2" style={{fontWeight:"600", fontSize:"12px", marginTop:"15px"}}>Enter Password</Typography>

         <TextField 
        fullWidth
        size="small"
        type="password"
        slotProps={{
          input: {
            endAdornment: <InputAdornment style={{cursor:"pointer"}} position="end">
              <IconButton onClick={handlePasswordicon}>
                {show ? <VisibilityOffOutlinedIcon/> : <VisibilityOutlinedIcon/>}

              </IconButton>
            </InputAdornment>,
          },
        }}
        />  

        <ReCAPTCHA style={{margin:"20px"}} sitekey="6LfVGrgqAAAAAGjTWFRSOHUd-jb200e9DMksaXG7"/>

        <Box className="btn-container">
          <Button className="btn" variant="contained">Login</Button>
          <Button className="btn" variant="outlined">Sign up</Button>
          </Box>  
      </Grid>
    </Grid>
  </Paper>
</Box>

    
        
     
        </>
    )
};

export default LoginPage;