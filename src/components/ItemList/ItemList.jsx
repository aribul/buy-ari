import React, { useEffect, useState } from "react";
import {Route} from 'react-router-dom';
import { products } from '../../products';
import Item from "../Item/Item";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemList = () => {
    const [product, setProduct] = useState([]);

        useEffect(() => {
            setTimeout(() => {
                const promise = new Promise ((resolve, reject) => {
                    resolve(products);
                });
                promise.then(products => {
                    setProduct(products);
                });
            }, 2000);
        
        }, []);



        return(
            <>
        
            {product.map((products) => {

                    return(
                        
                    <Item key={products.id}               

                    pictureUrl={products.pictureUrl}                 

                    title={products.title}     

                    price={products.price}                    
                    />
                )
                    })
            
               
            }

            <Route path="/Productos/:title">
            <ItemDetailContainer/> 
            </Route>  

                
            </>
        )

        }

export default ItemList;