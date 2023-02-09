import {Box,Button,TextField,useMediaQuery,Typography, AppBar, Paper} from "@mui/material";
// import { useState } from "react";
// import { EditOutlined } from "@mui/icons-material";
import { Formik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import { Stack } from "@mui/system";
import Link from "next/link";
import { EditOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

const registerSchema = yup.object().shape({

  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email:yup.string().email("invalid mail").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),

});





const initialValuesRegister = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  location:"",
  occupation:"",
  picture:"",
}

const Form = () => {
  const router = useRouter();


  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

  };


  return (
    
    <Formik
    onSubmit={register}
    initialValues = {initialValuesRegister}
    validationSchema = {registerSchema}
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
            minWidth:"500px",
            display:"flex",
            justifyContent:'center',
            alignItems:"center",
            p:"4rem"

          }}

          >
          <Stack 
           spacing={5}
          >
          <Box
          sx={{
            maxWidth:"80%",
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center"
          }}
          >
          <TextField  variant="outlined" label="first name" 
            
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.firstName}
            name="firstName"
            error={Boolean(touched.firstName) && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
            sx={{
              maxHeight:"50px",
              
            }}>

            </TextField>
            <TextField  variant="outlined" label="last name" 
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
              maxHeight:"50px",
              
            }}
                >
          </TextField>
          </Box>

          <TextField  variant="outlined" label="location" sx={{
            maxWidth:"80%",
            maxHeight:"50px",
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.location}
          name="location"
          error={Boolean(touched.location) && Boolean(errors.location)}
          helperText={touched.location && errors.location}
          >
          
        </TextField>
        
        <TextField  variant="outlined" label="occupation" sx={{
            maxWidth:"80%",
            maxHeight:"50px",
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.occupation}
          name="occupation"
          error={Boolean(touched.occupation) && Boolean(errors.occupation)}
          helperText={touched.occupation && errors.occupation}
          ></TextField>
            {/* Data box */}
                <Box
                  border="1px solid black"
                borderRadius="5px"
                p="1rem"
                sx={{
                minWidth:"80%",
                minHeight:"50px",
              }}
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border="1px dashed blue"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <p>Add Picture Here</p>
                        ) : (
                          <>
                            <Typography>{values.picture.name}</Typography>
                            <EditOutlined></EditOutlined>
                          </>
                            
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>


          <TextField  variant="outlined" label="email" type="email" sx={{
            maxWidth:"80%",
            maxHeight:"50px",
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
            maxWidth:"80%",
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
          variant = "contained"
          type="submit"
          >
              Submit
          </Button>

            <Link href="/" color="primary" sx={{
              
            }}>
            Already have an account?login here
            </Link>

          </Stack>
          
          </Box>
          </form>)}
    </Formik>
  )
}

export default Form