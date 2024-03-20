import React from 'react';
import { AllContexts } from "../App";
import { useContext } from "react";
import hh from '../Asset/down.jpeg'

const Transaction = () => {
    const context_obj = useContext(AllContexts)
  return (
    <>

        

        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-center mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white text-center" >Transactions</h5>
        </div>
        <div class="flow-root" >
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700" >

                    {
                        context_obj.tsc.map((item)=>{
                            return <li class="py-3 sm:py-4 m-4" style={{backgroundColor:"#111827", padding:"20px", borderRadius:"16px"}}>
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full" src={hh} alt="Neilimage" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-white truncate dark:text-white">
                                        {item.cmp}
                                    </p>
                                    <p class="text-sm text-white truncate dark:text-gray-400">
                                        {item.date}
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-white dark:text-white">
                                    {item.cprice * item.quantity}
                                </div>
                            </div>
                        </li>
                        })
                    }
                </ul>
        </div>
        </div>


    </>
  )
}

export default Transaction
