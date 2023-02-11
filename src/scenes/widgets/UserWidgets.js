import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
    
} from "@mui/icons-material";
import profilepic from "../../assets/p5.jpeg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Box, Typography, Divider, Avatar,useTheme} from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import WidgetWrapper from "@/components/widgetWrapper";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";

const UserWidget = ({userId, picturePath})=>{
    const [user,setUser] = useState(null);
    const router = useRouter();
    // const token = useSelector((state) => state.token);
    // const {pallete} = useTheme();
    const dark = "#E0E0E0";
  const medium = "#858585";
  const main = "#C2C2C2";

    const getUser = async()=>{
        
      try {
        const reponse = await fetch(`http://localhost:3001/users/63e3e66a5571192a81d0ca89`,{
            method:"GET",
        });
        const data = await reponse.json();
        setUser(data);
        console.log("sucessfuly fetched for user widgets");
      } catch (error) {
        console.log(error)
      }
      
      
       
    }

    useEffect(()=>{
        getUser()
    },[])

    if(!user){
        return null;
    }
    const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
    }= user

    return (
        <WidgetWrapper>
          {/* FIRST ROW */}
          <FlexBetween
            gap="0.5rem"
            pb="1.1rem"
            onClick={() => router.push(`/profile/${userId}`)}
          >
            <FlexBetween gap="1rem">
              <Avatar src={profilepic}></Avatar>
              <Box>
                <Typography
                  variant="h4"
                  color={dark}
                  fontWeight="500"
                  sx={{
                    "&:hover": {
                     
                      cursor: "pointer",
                    },
                  }}
                >
                  {firstName } {lastName }
                </Typography>
                <Typography color={medium}>{friends.length} friends</Typography>
              </Box>
            </FlexBetween>
            <ManageAccountsOutlined />
          </FlexBetween>
    
          <Divider />
    
          {/* SECOND ROW */}
          <Box p="1rem 0">
            <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
              <LocationOnOutlined fontSize="large" sx={{ color: main }} />
              <Typography color={medium}>{location}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="1rem">
              <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
              <Typography color={medium}>{occupation}</Typography>
            </Box>
          </Box>
    
          <Divider />
    
          {/* THIRD ROW */}
          <Box p="1rem 0">
            <FlexBetween mb="0.5rem">
              <Typography color={medium}>Who's viewed your profile</Typography>
              <Typography color={main} fontWeight="500">
                {viewedProfile}
              </Typography>
            </FlexBetween>
            <FlexBetween>
              <Typography color={medium}>Impressions of your post</Typography>
              <Typography color={main} fontWeight="500">
                {impressions}
              </Typography>
            </FlexBetween>
          </Box>
    
          <Divider />
    
          {/* FOURTH ROW */}
          <Box p="1rem 0">
            <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
              Social Profiles
            </Typography>
    
            <FlexBetween gap="1rem" mb="0.5rem">
              <FlexBetween gap="1rem">
                <TwitterIcon></TwitterIcon>
                <Box>
                  <Typography color={main} fontWeight="500">
                    Twitter
                  </Typography>
                  <Typography color={medium}>Social Network</Typography>
                </Box>
              </FlexBetween>
              <EditOutlined sx={{ color: main }} />
            </FlexBetween>
    
            <FlexBetween gap="1rem">
              <FlexBetween gap="1rem">
                <LinkedInIcon></LinkedInIcon>
                <Box>
                  <Typography color={main} fontWeight="500">
                    Linkedin
                  </Typography>
                  <Typography color={medium}>Network Platform</Typography>
                </Box>
              </FlexBetween>
              <EditOutlined sx={{ color: main }} />
            </FlexBetween>
          </Box>
        </WidgetWrapper>
      );

}

export default UserWidget;