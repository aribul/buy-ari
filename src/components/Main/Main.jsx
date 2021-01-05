import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../Home/Home";
import Productos from "../Productos/Productos";
import Macarons from "../Macarons/Macarons";
import Cupcakes from "../Cupcakes/Cupcakes";
import Tortas from "../Tortas/Tortas";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";






const Main = () => {
    return(
        <>
        <main>
        <Switch>

            <Route exact path="/" >
                <Home/>
            </Route>

            <Route path="/productos">
                <Productos/>
            </Route>

            <Route path="macarons">
                <Macarons/>
            </Route>

            <Route path="/cupcakes">
                <Cupcakes/>
            </Route>
            
            <Route path="/tortas">
                <Tortas/>
            </Route>


            <Route path="/productos/:id">
                <ItemDetailContainer/> 
            </Route>  



        </Switch>

        </main>
        </>
    )
}

export default Main;