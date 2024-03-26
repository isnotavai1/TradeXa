import React from 'react'

const Buy = () => {
  return (
    <div className='fixed flex justify-between'  style={{bottom:"10vh"}}>
        <button style={{marginLeft:"20vw", padding:"15px 30px"}} type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sell</button>
        <button style={{marginLeft:"15vw", padding:"15px 30px"}} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy</button>
    </div>
  )
}

export default Buy
