import React, {useState} from 'react';
import { Button, Typography, Grid, Container, Avatar} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { login, register} from '../../actions/users';
import  {useFormik} from 'formik';
import * as yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './style';
import Input from './Input';
import { clear } from '../../actions/errors';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
const Login = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [userData] = useState({
        username: '',
        password: ''
    });
    const history = useHistory();
    const validationSchema = yup.object({
      username: yup.string()
          .required('Specify your username!'),
      password: yup.string()
          .required('Specify your password!').min(6, "Minimum 6 characters")
    });


    const formik = useFormik({
        initialValues: {
          username: userData.username,
          password: userData.password
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
             dispatch(login(values,history));
            
        }
    });
    return(
      <Container maxWidth="xs">
    <div className={classes.paper}> 
      <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
         <Typography component="h1" variant="h5">
          Login
         </Typography>
         {props.error && <Alert severity={props.error.type}>{props.error.message}</Alert> }
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
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
               <Button component={Link} to='/auth/register'>DON'T HAVE AN ACCOUNT? REGISTER</Button>
            </Grid>
          </Grid>
        </form>
            </div>

        </Container>
    )

}

export default Login;