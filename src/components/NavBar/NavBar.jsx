import React from 'react';
import './navBar.css';
import CartWidget from '../cartWidget/cartWidget.jsx'

 
const NavBar = () => {
 
  	return (
 
        <>
        <header>
            <div className="div-header_img">
                <img className="logoHeader" src="./img/buy-ari.png" alt=""/>
            </div>
            <div className="div-header_list">
            <ul className="navBar">
                <li className="navBar-list"><a href="">Registrarse</a></li>
                <li className="navBar-list"><a href="">Cómo comprar</a></li>
                <li className="navBar-list"><a href="">Ayuda</a></li>
                <li className="navBar-list"><CartWidget/></li>
            </ul>
            
            </div>
        </header>
      </>
 
  	)

 
}
 
export default NavBar;