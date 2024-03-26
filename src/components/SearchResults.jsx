import React from "react";
import { AllContexts } from "../App";
import { useContext } from "react";

const SearchResults = ({ results }) => {
    const context_obj = useContext(AllContexts);

  return (
    <ul
      className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-gray-800 custom-scrollbar custom-scrollbar-dark">
      {results.map((item, index) => {
        return (
          <li
            key={index}
            className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-600"
            onClick={() => context_obj.setSymbol(item)}
          >
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  )
}

export default SearchResults
