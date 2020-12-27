import React from "react";


function Item({id, title, price, pictureUrl }) {

    return(
        <div key={id}>
            <div>
                <img src={pictureUrl} alt="Imagen producto"/>
            </div>
            <div>
                <h3 className="itemTitle">{title}</h3>
                <p className="itemPrice">{price}</p>
            </div>
            
        </div>
        )
 };

export default Item;