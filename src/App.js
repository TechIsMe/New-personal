import './App.css';
import React from 'react';
import  { Routes , Route , Outlet } from 'react-router-dom';
// import Home from './routes/Home';
import Nav from './Components/Nav';


function App() {
  return (
    <div>
      
      <Nav />
      {/* <Home /> */}
      <Outlet />

    </div>
  );
}

export default App;
