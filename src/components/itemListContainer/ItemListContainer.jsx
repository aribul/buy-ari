import React from 'react';
import ItemAcount from '../ItemAcount/ItemAcount.jsx';


const ItemListContainer = (props) =>{
    return(
     <section>
         <p>{props.list}</p>
         <ItemAcount initial = {1} stock ={10}/>
     </section>
    )
    }

export default ItemListContainer