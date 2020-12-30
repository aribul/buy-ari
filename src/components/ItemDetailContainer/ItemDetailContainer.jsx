import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { products } from "../../products.js";
import ItemDetail from './ItemDetail.jsx';






const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const params = useParams();

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
        <div>
        {  
            product.map((p)=>{
                return(
                    p.id === params.id ? 
                    <ItemDetail 
                        key={p.id}
                        products={{
                            title : p.title,
                            pictureUrl : p.pictureUrl,
                            description : p.description,
                            price : p.price,
                         }}
                    /> :
                    null
                )
            })
        }
    </div>
)


    /*return(
        <>
             {product.map((products) => {
                return (
                    products.id === id ?
                    <>
                    
                <div>
                    <ItemDetail
                            products={{
                                    title : products.title,
                                    pictureUrl : products.pictureUrl,
                                    description : products.description,
                                    price : products.price,
                                 }} />
                </div>
                </>
                )
            )}
        </>
    )*/
}

export default ItemDetailContainer