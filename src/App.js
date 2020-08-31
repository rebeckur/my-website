import React from 'react';
import './App.css';

import HeaderComponent from './header/HeaderComponent';

function App() {
  const images = [
    { url: "images/cherry blossom.jpg" },
    { url: "images/mosaic stairs.jpg" },
    { url: "images/big boba.jpg" },
  ];

  return (
    <div className="App">
      <HeaderComponent 
        width={250}
        height={250}
        images={images} />
    </div>
  );
}

export default App;
