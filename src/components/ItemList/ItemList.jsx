import React, { useEffect, useState } from "react";
import { products } from '../../products';
import Item from "../Item/Item";

const ItemList = () => {

    const [product, setNewItem] = useState([]);

        useEffect(() => {
            setTimeout(() => {
                const promise = new Promise ((resolve, reject) => {
                    resolve(products);
                });
                promise.then(products => {
                    setNewItem(products);
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
            </>
        )

        }

export default ItemList;