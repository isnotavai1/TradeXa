import React from 'react'
import {useState,createContext, useEffect} from 'react'
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Transaction from './components/Transaction';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
export const AllContexts=createContext();
function App() {
  const [pg , setPg] = useState("0");
  const [tsc, setTsc] = useState([]);
  const [mon, setMon] = useState("daily");
  const [symbol, setSymbol] = useState("META");
  const [cmpData , setCmpData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.2:5003/api/tsc');
        const data = await response.json();
        setTsc(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    fetchData();
  }, []);

  useEffect(()=>{
    const cur = {"AAPL":{
      hold : 0,
      Net : 0 , 
      history : []
    },"AMZN":{
      hold : 0 ,
      Net : 0,
      history : []
    },"META" :{
      hold: 0 , 
      Net : 0,
      history : []
    }}
    tsc.map((item , index)=>{
        if(item){
           cur[item.cmp]["history"].push(item);
           if(item.type){
              cur[item.cmp]["hold"]+=item.quantity;
              cur[item.cmp]["Net"] += (item.quantity * item.cprice)
           }
           else{
             cur[item.cmp]["hold"]-=item.quantity;
             cur[item.cmp]["Net"] -= (item.quantity * item.cprice)
           }
        }          
    })
   setCmpData(cur)
  } , [tsc])

    const movPgs = (val)=>{
    setPg(val);
  }

  return (
    <div>
      <AllContexts.Provider value = {{pg , movPgs, tsc, setSymbol,cmpData, symbol, mon, setMon}}>
        <BottomNav/>
        {pg === "0" && <Home/>}
        {pg === "4" && <Transaction />}
        {pg === "1" && <Dashboard />}
        {pg === "3" && <Chat/>}
      </AllContexts.Provider>
    </div>
  )
}

export default App
