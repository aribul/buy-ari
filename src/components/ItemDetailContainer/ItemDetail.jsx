import React from 'react';
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({products: {title, pictureUrl, description, price}}) => {
         return(
        <>
            <h2>{title}</h2>
            <img alt="Imagen producto" src={pictureUrl} />
            <p>{price}</p>
            <p>{description}</p>
            <ItemCount stock={10} initial={1} />
           
        </>
    )
}

export default ItemDetail;