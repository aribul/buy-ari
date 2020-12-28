import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail.jsx';





const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const listaDatos = fetch("productos.json")
            listaDatos.then((getProductos) => {
                if (getProductos.status === 200)
                    return getProductos.json()
            })
            .then(getProductos => {
                setItem(getProductos)
            })
        }, 3000)
    }, [])

    return(
        <>
            {item.map((p) => {
                return (
                <div>
                    <ItemDetail
                            products={{
                                    title : p.title,
                                    pictureUrl : p.pictureUrl,
                                    description : p.description,
                                    price : p.price,
                                 }} />
                </div>
                )}
            )}
        </>
    )

}

export default ItemDetailContainer