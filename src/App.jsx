import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx';
import Main from './components/Main/Main.jsx';

const App = () => {


  return (

        <BrowserRouter>

          <NavBar/>
          <Main/>

        </BrowserRouter>
  );
}

export default App;
