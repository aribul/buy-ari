import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { products } from '../../products';
import Item from "../Item/Item";

const ItemList = () => {

    const parametros = useParams ()

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

            
                
            </>
        )

        }

export default ItemList;