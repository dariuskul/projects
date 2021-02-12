import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import {Container} from '@material-ui/core'
import {BrowserRouter, Switch, Route,Router} from 'react-router-dom'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
 const App = () =>{


    return(
    <BrowserRouter>
        <Container maxWidth="lg">
            <NavBar/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path='/auth/register' exact component={Register}/>
            <Route path='/auth/login' exact component={Login}/>
            </Switch>
        </Container>
    </BrowserRouter>
    )
}

export default App;