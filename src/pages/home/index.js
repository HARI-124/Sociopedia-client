import { Typography,Box } from "@mui/material";
import Navbar from "@/components/Navbar";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import UserWidget from "@/scenes/widgets/UserWidgets";
import MyPostWidget from "@/scenes/widgets/MyPostWidget";
import FriendListWidget from "@/scenes/widgets/Friendlist";

export default function MyHome() {
    const isAuth = Boolean(useSelector((state) => state.token));
    const router = useRouter();
    const {_id,picturePath} = useSelector((state)=>state.user);
//    const  _id = "63e777d520481b42e794c7a4";
//    const picturePath = 'Screenshot (12).png';
    useEffect(()=>{
        if(!isAuth){
            router.push("/");
        }
        
    },[]);
    
    
  
    
    return (

<>
<Navbar>
    
</Navbar>

<Box display="flex" gap="4rem">
<Box sx={
{
    width:"300px",
    backgroundColor:"white",
    mt:"2rem"
}
}>
<UserWidget
userId={_id}
picturePath={picturePath}
></UserWidget>

</Box>

<Box
sx={
{
    width:"500px",
    backgroundColor:"white",
    mt:"2rem"
}
}

>
    <MyPostWidget picturePath= {picturePath} >

    </MyPostWidget>




</Box>


<Box>
    <FriendListWidget userId={_id}>

    </FriendListWidget>
</Box>


</Box>





</>

)



};