import React from 'react';
import './navBar.css';

 
class NavBar extends React.Component {
 
  render() {
 
  	return (
 
        <>
        <ul className="navBar">
            <img src="buy-ari.svg" alt=""/>
            <li className="navBar-list">Registrarse</li>
            <li className="navBar-list">Cómo comprar</li>
            <li className="navBar-list">Ayuda</li>
        </ul>
      </>
 
  	)
    
  }
 
}
 
export default NavBar;