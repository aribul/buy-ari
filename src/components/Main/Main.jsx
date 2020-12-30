import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx';
import Home from "../Home/Home";
import Productos from "../Productos/Productos";
import Registro from "../Registro/Registro";
import ComoComprar from "../ComoComprar/ComoComprar";
import Ayuda from "../Ayuda/Ayuda";



const Main = () => {
    return(
        <>
        <main>

        <Route exact path="/" >
            <Home/>
        </Route>

        <Route path="/productos">
            <Productos/>
        </Route>

        <Route path="/Registro">
            <Registro/>
        </Route>

        <Route path="/Como Comprar">
            <ComoComprar/>
        </Route>
        
        <Route path="/Ayuda">
            <Ayuda/>
        </Route>



       
        <ItemDetailContainer/>
        </main>
        </>
    )
}

export default Main;