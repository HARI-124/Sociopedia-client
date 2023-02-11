import {Box,Button,TextField,useMediaQuery,Typography,Stack} from "@mui/material";

import { EditOutlined } from "@mui/icons-material";
import {Formik} from "formik";
import * as yup from "yup";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { setLogin,setLogout,setFriends,setPost,setPosts } from "@/state/reducer";
import { useDispatch,useSelector } from "react-redux";





// Initializations

const loginSchema = yup.object().shape({
    email:yup.string().email("invalid mail").required("required"),
    password: yup.string().required("required"),
  })


  
const initialValuesLogin = {
    email:"",
    password:"",
  }



export const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loginURL = "http://localhost:3001/auth/login"
  const login = async(values,onSubmitprops)=>{
    const loggedInResponse = await fetch(loginURL,{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(values),
    })
    const loggedIn = await loggedInResponse.json();
    onSubmitprops.resetForm();
    if(loggedIn){
      dispatch(setLogin({
        user:loggedIn.user,
        token:loggedIn.token,
      }))
        router.push("/home");
       
    }else{
      console.log("not fetched in login");
    }
    // console.log(values);

  };

  return (
    
    <Formik
    onSubmit={login}
    initialValues = {initialValuesLogin}
    validationSchema = {loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
         
          <Box
          borderRadius="2rem"
          sx={{
            minWidth:"700px",
            display:"flex",
            justifyContent:'center',
            alignItems:"center",
            p:"4rem"

          }}

          >
          <Stack 
           spacing={5}
           sx={{
           
            display:"flex",
            justifyContent:'center',
            alignItems:"center",

          }}
          >
        
          <TextField  variant="outlined" label="email" type="email" sx={{
            minWidth:"300px"
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={Boolean(touched.email) && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          
          >
        </TextField>

            
        <TextField  variant="outlined" label="password" type="password" sx={{
            minWidth:"300px",
            maxHeight:"50px",
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          name="password"
          error={Boolean(touched.password) && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          >
        </TextField>

          <Button color="primary" sx={{
            maxWidth:"80%",
            maxHeight:"50px",
            transition:"500ms",
            bgcolor:"primary",
            
          }} 
          type="submit"
          variant = "contained"

        
          >
              Submit
          </Button>

            <Link href="/register" color="primary" sx={{
              
            }}>
            Dont have an account register here
            </Link>

          </Stack>
          
          </Box>
          </form>)}
    </Formik>
  )
}
  