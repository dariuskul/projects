import React, {useEffect, useState} from 'react';
import { Button, Typography, Grid, Container, Avatar, Collapse} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { register} from '../../actions/users';
import  {useFormik} from 'formik';
import * as yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './style';
import Input from './Input';
import Alert from '@material-ui/lab/Alert';
import { Link, useHistory } from 'react-router-dom';
const Register = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [userData] = useState({
        name: '',
        lastName: '',
        username: '',
        password: ''
    });
    const [message,setMessage] = useState('');
    const [open,setOpen] = useState(true);

    const history = useHistory();
    const validationSchema = yup.object({
      name: yup.string()
        .required('Specify your name!'),
      lastName: yup.string()
          .required('Specify your last name!'),
      username: yup.string()
          .required('Specify your username!'),
      password: yup.string()
          .required('Specify your password!').min(6, "Minimum 6 characters")
    });

    const msgs = useSelector((state)=>state.errors.message);
    useEffect(()=>{
        if(msgs){
            setMessage(msgs);
        }
    },[msgs])

    const formik = useFormik({
        initialValues: {
          name: userData.name,
          lastName: userData.lastName,
          username: userData.username,
          password: userData.password
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
           dispatch(register(values,history));
            
        }
    });
    return(
      <Container maxWidth="xs">
    <div className={classes.paper}> 
      <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Collapse in={open}>
        {message ? (<Alert onClose={() => {setOpen(!open)}} severity="success">{message}</Alert>) : ''}
        </Collapse>
         <Typography component="h1" variant="h5">
              Register
         </Typography>
         {props.error && <Alert severity={props.error.type}>{props.error.message}</Alert> }
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Input type='name' name="name" label="Your first name" handleOnChange={formik.handleChange} value={formik.values.name} error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} half/>
            <Input type='name' name="lastName" label="Your last name" handleOnChange={formik.handleChange} value={formik.values.lastName} error={formik.touched.lastName && Boolean(formik.errors.lastName)} helperText={formik.touched.lastName && formik.errors.lastName}  half/>
            <Input type='username' name="username" label="Your username" handleOnChange={formik.handleChange} value={formik.values.username} error={formik.touched.username && Boolean(formik.errors.username)} helperText={formik.touched.username && formik.errors.username} />
            <Input type='password' name="password" label="Your password" handleOnChange={formik.handleChange} value={formik.values.password} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
               <Button component={Link} to="/auth/login">ALREADY HAVE AN ACCOUNT? LOGIN</Button>
            </Grid>
          </Grid>
        </form>
            </div>

        </Container>
    )

}

export default Register;