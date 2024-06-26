import React from 'react'

const Chatbuuble = () => {
  return (
    <div class="flex items-start gap-2.5">
            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{new Date().toLocaleTimeString()}</span>
                </div>
                <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
            </div>
        </div>
  )
}

export default Chatbuuble
