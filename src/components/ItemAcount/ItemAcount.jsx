import React from "react";


const ItemAcount = () => {
    const[contador, setContador] = React.useState(1);
    const stock= 5;


  const aumentarContador = () => {
    setContador(contador+1); 
    
    if(contador < stock){
        document.getElementById('botonAumentar').disabled = true;

        console.log("Hola");

    }

  }



  const restarContador = () => {
    setContador(contador-1); 

    if(stock > contador){
      document.getElementById('botonAumentar').disabled = false;

    }

    if(contador < 2){
      document.getElementById('botonRestar').disabled = false;
    }
  }


  return (
    <>
      <p>Contador : {contador}</p>
      <button id="botonAumentar" onClick={aumentarContador}>Aumentar contador</button>
      <button id="botonRestar" onClick={restarContador}>Restar contador</button>
    </>
  )
}  

export default ItemAcount;