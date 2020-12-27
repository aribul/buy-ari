import React, {useEffect, useState} from 'react';


function ItemDetail() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const listaDatos = fetch("productos.json")
            listaDatos.then(res => {
                return res.json()
            })
            .then(res => {
                setItem(res[0])
            })
        }, 3000)
    }, [])

    return(
        <>
            {item ? (
                <div>
                    <div>
                        <img src={item.image} alt="Imagen del producto"/>
                    </div>
                    <div>
                        <h3 className="productTitle">{item.title}</h3>
                        <p className="price">{item.price}</p>
                        <p className="description">{item.description}</p>
                    </div>
                </div>
            ):
            ( <p>Esperando la información...</p> )
            }
        </>
    )

}

export default ItemDetail;