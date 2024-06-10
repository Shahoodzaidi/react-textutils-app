import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {

  const [mode , setMode]=useState("light");
  const removesc =()=>{
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-dark")
  }
  const toggleMode =(cls)=>{
    removesc()
    document.body.classList.add("bg-"+ cls)
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor='white'
    }else{
      setMode("dark")
      document.body.style.backgroundColor='black'
    }
    
   
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    </>
  )
}

export default App;
