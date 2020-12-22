import React from "react";


const ItemCount = (props) => {
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
      <button disabled= {contador === props.stock} onClick={aumentarContador}>Aumentar contador</button>
      <button disabled= {contador === props.initial} onClick={restarContador}>Restar contador</button>
    </>
  )
}  

export default ItemCount;