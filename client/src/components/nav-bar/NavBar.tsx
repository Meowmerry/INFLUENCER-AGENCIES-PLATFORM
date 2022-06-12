import React, { useEffect, useState } from "react";
import LoginButton from "../login/ButtonLogin";
import Image from "next/image"; 
import { useRouter } from 'next/router'

export const NavBar = () => {
  const router = useRouter()
  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-1 pt-2 rounded shadow-lg shadow-[#e2f1ff]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <a href="#" className="flex items-left" onClick={() => router.push('/')}>
            <Image src="/assets/images/logo2x.jpg" width={80} height={80} className="cursor-pointer object-contain" />
          </a>
        </div>

        <div className="flex md:order-2">
          <LoginButton />
        </div>
        <div
          className="hidden justify-be tween items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4"
        >
          <ul className="nav flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                onClick={() => router.push('/')}
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-sm md:border-0  md:p-0 dark:hover:text-[#4998DD] dark:text[#222325] dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                  onClick={() => router.push('/influencer')}
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-sm md:border-0  md:p-0 dark:hover:text-[#4998DD] dark:text[#222325] dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Influencers
              </a>
            </li>
            <li>
              <a
                onClick={() => router.push('/company')}
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-sm md:border-0  md:p-0 dark:hover:text-[#4998DD] dark:text[#222325] dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Brands & Agencies
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => router.push('/pricing')}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-sm  md:p-0 dark:hover:text-[#4998DD] dark:text[#222325] dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
