import {Box,Button,TextField,useMediaQuery,Typography,Stack} from "@mui/material";

import { EditOutlined } from "@mui/icons-material";
import {Formik} from "formik";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";







// Initializations
// const router = useRouter();
const loginSchema = yup.object().shape({
    email:yup.string().email("invalid mail").required("required"),
    password: yup.string().required("required"),
  })


  
const initialValuesLogin = {
    email:"",
    password:"",
  }

const login = async(values,onSubmitprops)=>{
    
    const loggenInResponse = await fetch("http://localhost:3001/auth/login",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggenInResponse.json();
    onSubmitprops.resetForm();
    if(loggedIn){
      console.log(loggedIn.user);
      // dispatch(setLogin({
      //   user: loggedIn.user,
      //   token: loggedIn.token
      // }))
      // router.push("/home");
    }

  };

export const LoginForm = () => {


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
            ":hover":{
              bgcolor:"white"
            }
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
  