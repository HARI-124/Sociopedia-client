import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme,Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setFriends } from "@/state/reducer";
import FlexBetween from "./FlexBetween";


const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
 const router = useRouter();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

//   const { palette } = useTheme();
  const primaryLight = "#00353F";
  const primaryDark = "#99EEFD";
  const main = "#C2C2C2";
  const medium = "#858585";

  const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:6001/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <Avatar src={userPicturePath}></Avatar>
        <Box
          onClick={() => {
            router.push(`/profile/${friendId}`);
            
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: "#00353F",
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
