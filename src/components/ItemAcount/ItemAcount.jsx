import React from "react";


const ItemAcount = () => {
    const[contador, setContador] = React.useState(1);
    const stock= 5;


  const aumentarContador = () => {
    setContador(contador+1); 
    
    if(stock === 0){
        document.getElementById('botonAumentar').disabled = true;
        document.write("Nos quedamos sin stock!");
    }else{
        document.getElementById('botonAumentar').disabled = false;
    }

  }

  const restarContador = () => {
    setContador(contador-1); 
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