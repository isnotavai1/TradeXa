import top_gainers from "../Data/topgainers.js"

function TopGainers() {
  // console.log(top_gainers["top_gainers"][0])
  const arr = []
  for(let i = 0 ; i < 6 ; i++){
    arr.push(top_gainers["top_gainers"][i])
  }
  const arr1 = []
  for(let i = 0 ; i < 6 ; i++){
    arr1.push(top_gainers["top_losers"][i])
  }
  return (
    <>
    <div class="w-full max-w-md mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Gainers</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
           
            {
              arr.map((item)=>{
                  return <li class="py-3 sm:py-4">
                  <div class="flex items-center">
                     
                      <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {item.ticker}
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              {item.change_amount}
                          </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-green-900 dark:text-green">
                          +{item.change_percentage}
                      </div>
                  </div>
              </li>
              })
            }
            
        </ul>
   </div>
</div>
<div class="w-full max-w-md mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Loosers</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
           
            {
              arr1.map((item)=>{
                  return <li class="py-3 sm:py-4">
                  <div class="flex items-center">
                     
                      <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {item.ticker}
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              {item.change_amount}
                          </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-red-900 dark:text-red">
                          {item.change_percentage}
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

export default TopGainers
