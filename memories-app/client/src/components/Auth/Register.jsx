import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { register} from '../../actions/users';
import  {useFormik} from 'formik';
import * as yup from 'yup';
const Register = () => {
    const dispatch = useDispatch();
    const [userData, setData] = useState({
        username: '',
        password: ''
    });
    const formik = useFormik({
        initialValues: {
          username: userData.username,
          password: userData.password
        },
        onSubmit: (values) => {
          dispatch(register(values));
        }
    });

    return(
        <Paper>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              
            <Typography variant="h6"> Register</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={formik.values.username}
                onChange={formik.handleChange}
                />
                <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                />
                
                <Button  color="primary" variant="contained" size="large" type="submit" fullWidth>Register</Button>
            </form>
        </Paper>
    )

}

export default Register;