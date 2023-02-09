import {Box,Typography} from "@mui/material";
import { LoginForm } from "@/components/loginForm";

export default function Login(){
  
  
  return <>
    <Box width="100%" bgcolor="primary" textAlign="center" margin="0">
      <Typography
      fontWeight="bold"
      fontSize= "32px"
      color="primary"
      >
      Sociopedia
      </Typography>
      
      <Box
    
      borderRadius="1.5rem"

      >
  <Typography fontWeight="500" variant="h5" mb="1.5rem">
      Welcome to Sociopedia
  </Typography>
      </Box>
  <LoginForm></LoginForm>

      
    </Box>
  </>
}