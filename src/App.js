import React from 'react';
import "./App.css";
import Home from './Home';
import { useSelector } from 'react-redux';


function App() {
  const {c} = useSelector((state) => state.custom);
  return (
    <>
    <h1 className='App-header'>Redux toolkit</h1>
    <h1 className='value'>{c}</h1>
      <Home />
    </>
  )
}

export default App;