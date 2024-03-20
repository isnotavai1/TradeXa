import { MdOutlineArrowUpward } from "react-icons/md";
import { IoArrowDown } from "react-icons/io5";
import "../Style/HomeCard.css"
function HomeCard() {
  return (
    <div className="HomeCardo">
            <div className="Homecardt">Total Investment</div>
            <div className="Homecardth">$86000</div>
            <div className="Homecardf">
                <div className="Homecardfa">
                    <div className="Homecardic"><MdOutlineArrowUpward/></div>
                    <div className="Homecardv">$568</div>
                </div>
                <div className="Homecardfb">
                    <div className="Homecardic"><IoArrowDown/></div>
                    <div className="Homecardv">$568</div>
                </div>
            </div>
    </div>
  )
}

export default HomeCard
