import { configureStore,createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialStatee = {
    user: {
    _id: "63e777d520481b42e794c7a4",
    firstName: 'Hari',
    lastName: 'sudarsan',
    email: '2@3.com',
    password: '$2b$10$R.g/d2Han8ZuyMQAhsaoi.Q7NMQT5NVZguoTqB1lipD/Fs64aV0Xe',
    picturePath: 'Screenshot (12).png',
    friends: [],
    location: 'India',
    occupation: 'webd',
    viewedProfile: 905,
    impressions: 4563,
    __v: 0
    } ,
    token: null,
    posts: [],
  };

  // const url = "";
  // export const getPosts = createAsyncThunk("auth/getuserPost",()=>{
  //   return fetch(url)
  //           .then((resp) => resp.json())
  //           .catch((err)=> console.log(err))
  // })




export const authSlice = createSlice({
    name:"auth",
    initialState:initialStatee,
    reducers:{
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            console.log(state.user);
           
          },
          setLogout: (state) => {
            state.user = null;
            state.token = null;
          },
          setFriends: (state, action) => {
            if (state.user) {
              state.user.friends = action.payload.friends;
            } else {
              console.error("user friends non-existent :(");
            }
          },
          setPosts: (state, action) => {
            state.posts = action.payload.posts;
          },
          setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
              if (post._id === action.payload.post._id) return action.payload.post;
              return post;
            });
            state.posts = updatedPosts;
          },
    },
    // extraReducers:{
    //   [getPosts.fulfilled]:(state,actions)=>{
    //       state.posts = actions.payload;
    //   },
    //   [getPosts.rejected]:(state)=>{
    //     console.log("rejected for getting posts");
    //   }

    // }
    


}


);

export default authSlice.reducer;
export const {setLogin,setLogout,setFriends,setPost,setPosts} = authSlice.actions;