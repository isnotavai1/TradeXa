import React from "react";
import Search from "./Search";
import Graph from "./Graph";
import { AllContexts } from "../App";
import { useContext } from "react";
import daily from "../Data/DAILY/daily";
import Buy from "./Buy";
import hh from '../Asset/down.jpeg'

const Dashboard = () => {
  const context_obj = useContext(AllContexts);
  const defData = daily[context_obj.symbol];
  const sym = context_obj.symbol;
  const cur = [];
  Object.keys(defData["Time Series (Daily)"]).map((item) => {
    cur.push({
      name: item.toString(),
      val: defData["Time Series (Daily)"][item.toString()]["4. close"],
    });
  });
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Search />
      </div>
      <div style={{ height: "40vh", margin: "30px 5px" }}>
        <Graph data={cur} />
      </div>
      <div style={{margin:"10px 15px"}}>
          <div class="flex items-center" style={{backgroundColor:"#111827", padding:"20px 10px", borderRadius:"10px"}}>
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src={hh} alt="Neilimage" />
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-white truncate dark:text-white">
                {sym}
              </p>
              <p class="text-sm text-white truncate dark:text-gray-400">
                {context_obj.cmpData[sym]["Net"]}
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-white dark:text-white">
              {context_obj.cmpData[sym]["hold"]}
            </div>
          </div>
      </div>
      <Buy />
    </>
  );
};

export default Dashboard;
