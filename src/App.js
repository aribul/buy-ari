import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';

const App = () => {
  return (

        <div>
          <NavBar/>
          <ItemListContainer list='Hola!'/>
        </div>
  );
}

export default App;
