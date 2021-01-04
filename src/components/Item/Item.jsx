import React from "react";
import {Link} from 'react-router-dom';
import { products } from "../../products";


function Item({id, title, price, pictureUrl }) {

    return(
        <div key={id}>
            <div>
                <Link to={"/Productos"+products.title}><img src={pictureUrl} alt="Imagen producto"/></Link>
            </div>
            <div>
            <Link to={"/Productos"+products.title}><h3 className="itemTitle">{title}</h3></Link>
                <p className="itemPrice">{price}</p>
            </div>
            
        </div>
        )
 };

export default Item;