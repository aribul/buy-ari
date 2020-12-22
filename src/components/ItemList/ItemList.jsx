import React, { useEffect, useState } from "react";
import { products } from '../Item/Item.jsx';
import ItemCount from "../ItemCount/ItemCount.jsx";

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
            }, 5000);
        
        }, []);



        return(
            <>
            
            {product.map((item) => {

                    return(
                    <div key={item.id} id="pastryContainer">
                        <div id="pastry">
                            <img id= "imagen producto" src={item.image} alt="Imagen producto"/>
                        </div>
                        <div>
                            <h3 className="itemTitle">{item.title}</h3>
                            <p className="itemPrice">{item.price}</p>
                        </div>
                        <ItemCount initial = {1} stock ={10}/>
                    </div>
                    )
                })
            
                
                }
            </>
        )

        }

export default ItemList;