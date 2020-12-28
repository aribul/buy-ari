import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';

const App = () => {
  return (

        <BrowserRouter>

          <NavBar/>
          <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          </Switch>

        </BrowserRouter>
  );
}

export default App;
