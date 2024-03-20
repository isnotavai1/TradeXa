import React from 'react'
import {useState,createContext, useEffect} from 'react'
import BottomNav from './components/BottomNav';
import Home from './components/Home';
export const AllContexts=createContext();
function App() {
  const [pg , setPg] = useState("2");
  const movPgs = (val)=>{
    setPg(val);
  }
  return (
    <div>
      <AllContexts.Provider value = {{pg , movPgs}}>
        <BottomNav/>
        <Home/>
      </AllContexts.Provider>
    </div>
  )
}

export default App
