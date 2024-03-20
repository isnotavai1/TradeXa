import "../Style/BottomNav.css"
import { CiHome } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { PiChatsLight } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { AllContexts } from "../App";
import { useContext } from "react";
function BottomNav() {
  const context_obj = useContext(AllContexts)
  console.log(context_obj)
  return (
    <div className="BottomNav">
            <div className ={`InsBottomNav ${context_obj.pg === "0" ? "Blk" : "Gry"}`} onClick={()=>{
                context_obj.movPgs("0")
            }}><CiHome/></div>
            <div className={`InsBottomNav ${context_obj.pg === "1" ? "Blk" : "Gry"}`} onClick={()=>{
                context_obj.movPgs("1")
            }}><RxDashboard /></div>
            <div className={`InsBottomNav ${context_obj.pg === "2" ? "Blk" : "Gry"}`} onClick={()=>{
                context_obj.movPgs("2")
            }}><IoIosSearch /></div>
            <div className={`InsBottomNav ${context_obj.pg === "3" ? "Blk" : "Gry"}`} onClick={()=>{
                context_obj.movPgs("3")
            }}><PiChatsLight /></div>
            <div className={`InsBottomNav ${context_obj.pg === "4" ? "Blk" : "Gry"}`} onClick={()=>{
                context_obj.movPgs("4")
            }}><GrTransaction /></div>
    </div>
  )
}

export default BottomNav
