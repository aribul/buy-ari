import React from 'react';
import { Switch, Route } from "react-router-dom";
import { products } from '../../products';
import ItemList from "../ItemList/ItemList";

const Productos = () => {
    return(
        <>
          <Switch>

            <Route path="/"{...products.title}>
            <ItemList/>
            </Route>
             

            </Switch>
        </>
    )

  

}

export default Productos