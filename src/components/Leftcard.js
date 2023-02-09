import { Box,Typography,IconButton } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';




export default function LeftCard(){

    return (
        <>
        <Box bgcolor="black" width="400px" margin="20px" >
        <Box bgcolor="black" display="flex" justifyContent="space-between">
        
        <Box ml="5px">
        <Typography color="white">
            Fake person
        </Typography>
        <Typography color="white" variant="body1" fontSize="10px">
            0 friends
        </Typography>
        </Box>
       
       <IconButton color="inherit" mr="5px">
       <PersonAddIcon color="inherit"></PersonAddIcon>
       </IconButton>
      
    
       

        </Box>

        <Box>
        <LocationOnIcon>
        </LocationOnIcon>
        <Typography>
                Fake location
        </Typography>
        </Box>

        <Box>
        <WorkOutlineIcon></WorkOutlineIcon>
            <Typography>
            fake occupation
        </Typography>
        </Box>



</Box>
liugipdfb
        </>
    )



}