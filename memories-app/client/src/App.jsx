import React, {useEffect, useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import {Container} from '@material-ui/core'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/Auth/Register';
 const App = () =>{


    return(
        <BrowserRouter>
        <Container maxWidth="lg">
            <NavBar/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path='/auth' exact component={Register}/>
            </Switch>
        </Container>
        </BrowserRouter>
    )
}

export default App;