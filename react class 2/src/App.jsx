import React from 'react';
import Navbar from './navbar';

import './App.css';

function App() {
  let name = "Hasib"

  function callname(){
    alert("hello Hasib")
  }

  return (
    <div className='App'>
      <h1>Hello, {name}</h1>
      <h2>{2+3*5/8+6}</h2>

      <button onClick={callname}>Click me</button>

      <Navbar/>
      <Navbar/>
      
    </div>
  )
}

export default App;