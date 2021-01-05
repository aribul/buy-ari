import React, { useEffect, useState } from "react";
import { products } from "../../products.js";
import ItemDetail from './ItemDetail.jsx';



    const detailProd = [{id: products.id, title:products.title, description:products.description}];

    const itemDetail = new Promise( (result, reject) => 
        
        setTimeout(() => result(detailProd), 
                
                3000) ) ;

    const ItemDetailContainer = () =>{

        


            const [products, setProducts] = useState([]); 

            useEffect(() =>{ 

            itemDetail.then((product) => { 

            setProducts(product); 

            }); 

    }, []) 

    return( <> 

    {!products ? <div> Loading ...</div> : <ItemDetail products={products} /> } 

    </> )










  /*const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams()

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
                    p.id === product.lenght ? 
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


  return(
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