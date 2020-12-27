import React from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import ItemCount from "../ItemCount/ItemCount.jsx";


const Home = () => {
    return(
        <>

        <ItemList/>
        <ItemDetailContainer/>
        <ItemCount initial = {1} stock ={10}/>
        </>
    )
}

export default Home;