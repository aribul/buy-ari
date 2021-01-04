import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from "../Home/Home";
import Productos from "../Productos/Productos";
import Registro from "../Registro/Registro";
import ComoComprar from "../ComoComprar/ComoComprar";
import Ayuda from "../Ayuda/Ayuda";



const Main = () => {
    return(
        <>
        <main>
        <Switch>

            <Route exact path="/" >
                <Home/>
            </Route>

            <Route path="/Productos">
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

        </Switch>

        </main>
        </>
    )
}

export default Main;