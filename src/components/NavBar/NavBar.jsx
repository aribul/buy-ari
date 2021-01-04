import React from 'react';
import './navBar.css';
import CartWidget from '../cartWidget/cartWidget.jsx'
import { Link } from 'react-router-dom';

 
const NavBar = () => {
 
    return(
        <>
        <header>
            <div className="div-header_img">
                <Link to="/"><img className="logoHeader" src="./img/buy-ari.png" alt=""/></Link>
            </div>
            <div className="div-header_list">
            <ul className="navBar">
                <li className="navBar-list"><Link to="/productos">Productos</Link></li>
                <li className="navBar-list"><Link to="/registro">Registrarse</Link></li>
                <li className="navBar-list"><Link to="/comoComprar">Cómo comprar</Link></li>
                <li className="navBar-list"><Link to="/ayuda">Ayuda</Link></li>
                <li className="navBar-list"><CartWidget/></li>
            </ul>
            
            </div>
        </header>
      </>

    )
}
 
export default NavBar;