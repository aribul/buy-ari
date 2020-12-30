import React from 'react';
import { Link } from 'react-router-dom';
import './cartWidget.css'

const CartWidget = () =>{
    return(
    <>
       <Link to="/cartWidget"><img src="https://icongr.am/feather/shopping-cart.svg?size=76&color=currentColor" alt=""/></Link>
   </>
    )
}


export default CartWidget