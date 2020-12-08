import React from 'react';
import './navBar.css';

 
class NavBar extends React.Component {
 
  render() {
 
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
            </div>
        </header>
      </>
 
  	)
    
  }
 
}
 
export default NavBar;