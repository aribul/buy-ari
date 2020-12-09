import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/cartWidget.jsx'

 
const NavBar = () => {
 
  	return (
 
        <>
        <header>
            <div className="div-header_img">
                <img className="logoHeader" src="./img/buy-ari.png" alt=""/>
            </div>
            <div className="div-header_list">
            <ul className="navBar">
                <li className="navBar-list">Registrarse</li>
                <li className="navBar-list">Cómo comprar</li>
                <li className="navBar-list">Ayuda</li>
                
            </ul>
            <CartWidget/>
            </div>
        </header>
      </>
 
  	)

 
}
 
export default NavBar;