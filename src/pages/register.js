import Form from "@/components/registerForm";
import { Typography,Box } from "@mui/material";

export default function register(){
    return (
        <>
        <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        >

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
        </Box>
        
        
            <Form>
                
            </Form>
        </>
    )
}
