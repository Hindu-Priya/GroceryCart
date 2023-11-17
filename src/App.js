import React from 'react';
import Cart from './Cart';
import  './Grocery.jpg';


import './App.css';

function App() {
  return (
    <div className="App" >
      <Cart/>
      <footer style={{ color: '#e0e0e0'}}> 
      <h5>Please select the items, to add 'em into the cart. To remove an item, shoot at that item on the list.</h5>
      </footer>
    </div>

  );
}

export default App;
