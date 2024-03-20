import React from 'react'
import {useState,createContext, useEffect} from 'react'
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Transaction from './components/Transaction';
import Dashboard from './components/Dashboard';
export const AllContexts=createContext();
function App() {
  const [pg , setPg] = useState("0");
  const [tsc, setTsc] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.6:5000/api/tsc');
        const data = await response.json();
        setTsc(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    fetchData();
  }, []);

    const movPgs = (val)=>{
    setPg(val);
  }
  return (
    <div>
      <AllContexts.Provider value = {{pg , movPgs, tsc}}>
        <BottomNav/>
        {pg === "0" && <Home/>}
        {pg === "4" && <Transaction />}
        {pg === "1" && <Dashboard />}
      </AllContexts.Provider>
    </div>
  )
}

export default App
