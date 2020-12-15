import React from "react";


const ItemAcount = (props) => {
    const[contador, setContador] = React.useState(1);

  const aumentarContador = () => {
    if(contador < props.stock){
      setContador(contador+1);
    }

  }

  const restarContador = () => {
    if(contador > props.initial){
      setContador(contador-1);
    } 

  }


  return (
    <>
      <p>Contador : {contador}</p>
      <button onClick={aumentarContador}>Aumentar contador</button>
      <button onClick={restarContador}>Restar contador</button>
    </>
  )
}  

export default ItemAcount;