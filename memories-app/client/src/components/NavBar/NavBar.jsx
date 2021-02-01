import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles'
import memories from '../../images/memories.png';
import {Link} from 'react-router-dom'
import { Avatar } from '@material-ui/core';
const NavBar = () =>{
    const classes = useStyles();
    const user = null;
 return(
      <AppBar className={classes.appBar} position="static" color="inherit">
         <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} align="center" variant="h2">Memories</Typography>
           <img className={classes.image} src={memories} alt="icon" height="60"/>  
         </div>
         <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" color="secondary">Log out</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
            ) }
         </Toolbar>
      </AppBar>
        )
}

export default NavBar;