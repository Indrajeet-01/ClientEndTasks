
import React from 'react';
import AddItem from './components/AddItem';
import ProductList from './components/ProductList';


function App() {
  
  return (
    <div>
      <AddItem/>
      <ProductList category="electronics"/>
      <ProductList category="grocery"/>
      <ProductList category="cosmetics"/>
    </div>
  );
}

export default App;