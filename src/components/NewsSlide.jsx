import news from "../Data/News/news"
import { Carousel } from "flowbite-react";
import dfimg from "../Asset/defimg.webp"
function NewsSlide() {
  const cmp = ["AMZN" , "AAPL" , "GOOG" , "META" , "IBM" , "MSFT" , "NVDA"];
  const arr = []
  for(let i = 0 ; i < 7 ; i++){
        arr.push(news[cmp[i]][0])
  }
//   console.log(arr)
  return (
    <div className="h-60 sm:h-70 xl:h-90 2xl:h-100" style = {{height:"100vh"} } >

      <Carousel indicators={false} slideInterval={3000}>
          {arr.map((item, index) =>{
                return <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style = {{width:"80vw"}}>
                <a href="#">
                    <img class="rounded-t-lg" src={item.image === "" ? dfimg : item.image} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{item.headline}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.summary.substring(0 , 100) + "..."}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                         {/* <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg> */}
                    </a>
                </div>
            </div>
          })}
      </Carousel>
    </div>
  )
}

export default NewsSlide
