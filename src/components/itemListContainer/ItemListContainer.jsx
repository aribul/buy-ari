import React from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';


const ItemListContainer = (props) =>{
    return(
     <section>
         <p>{props.list}</p>
         <ItemCount initial = {1} stock ={10}/>
     </section>
    )
    }

export default ItemListContainer