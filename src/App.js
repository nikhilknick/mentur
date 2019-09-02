import React from 'react';
import logo from './logo.svg';
import image from './comingsoon.png'
import menturlogo from './mento.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <img className="heading-1" src={menturlogo}/>
    <div  className="comingsoon">
      <img src={image} />
    </div>
    </div>
  );
}

export default App;
