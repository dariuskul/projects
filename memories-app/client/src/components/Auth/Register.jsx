import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper, Grid, Container, CssBaseline, Avatar, FormControlLabel, Checkbox} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { register} from '../../actions/users';
import  {useFormik} from 'formik';
import * as yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './style';
import { Link } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [signIn, setSignIn] = useState(false);
    const [userData, setData] = useState({
        username: '',
        password: ''
    });

    const setState = () =>{
        setSignIn((prev)=> !prev);
    }



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
        <Container maxWidth="xs">
    <div className={classes.paper}> 
    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                </Avatar>
            <Typography component="h1" variant="h5">
                    {signIn ? 'Register' : 'Login'}
            </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
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
               <Button onClick={setState}>{signIn ? 'Already have an account? Login' : `Don't have an account? Register`}</Button>
            </Grid>
          </Grid>
        </form>
            </div>

        </Container>
    )

}

export default Register;