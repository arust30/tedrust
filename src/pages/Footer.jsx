import React from 'react'
import TedRustMinistriesLogo from '../assets/tedrustlogocircle.png'

const Footer = () => {
  return (
    
<footer class="bg-white rounded-lg shadow static bottom-0">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
                <img src={TedRustMinistriesLogo} class="h-16 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ted Rust Ministries</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/family" class="mr-4 hover:underline md:mr-6 ">Family</a>
                </li>
                <li>
                    <a href="/sermons" class="mr-4 hover:underline md:mr-6">Sermons</a>
                </li>
                <li>
                    <a href="/biography" class="mr-4 hover:underline md:mr-6 ">Biography</a>
                </li>
                <li>
                    <a href="/contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer