import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemAcount from './components/ItemAcount/ItemAcount.jsx'

const App = () => {
  return (

        <>
          <NavBar/>
          <ItemListContainer list='Hola!'/>
          <ItemAcount/>
        </>
  );
}

export default App;
