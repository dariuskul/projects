import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles'
import memories from '../../images/memories.png';
import {Link} from 'react-router-dom'
import { Avatar } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../../actions/users';
import {useHistory} from 'react-router-dom';
const NavBar = () =>{
    const classes = useStyles();
    const user = useSelector((state)=> state.users.user);
    const dispatch = useDispatch();
    const history = useHistory();
   const logOut = () =>{
        dispatch(logout(history));
    }
  history.listen(()=>{
      dispatch({type: 'CLEAR'});
  })


 return(
      <AppBar className={classes.appBar} position="static" color="inherit">
         <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} align="center" variant="h2">Memories</Typography>
           <img className={classes.image} src={memories} alt="icon" height="60"/>  
         </div>
         <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name}>{user.result.name.charAt(0) || ""}</Avatar>
                 <Typography className={classes.userName} variant="h6">{user.result.name + ' ' + user.result.lastName}</Typography> 
                    <Button variant="contained" color="secondary" onClick={logOut}>Log out</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth/login" variant="contained" color="primary">Sign in</Button>
            ) }
         </Toolbar>
      </AppBar>
        )
}

export default NavBar;