import React, { useEffect, useState,FunctionComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ButtonProfile } from "../Login/ButtonProfile";
import Link from "next/link";
import { UserData } from "../sponcership/interface/user-interface";
interface NavProfileProps {
  isLogin: boolean;
  handleLogout: () => void;
  isLoading?: boolean;
  userData: UserData | undefined
}

export const NavProfile: FunctionComponent<NavProfileProps> = (props) => {
  const { handleLogout, isLoading, isLogin,userData } = props;
 
  return (
    <div>
      <nav >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div>
            <a href="#" className="flex items-left">
              <Image
                src="/assets/images/logo-blue.png"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
              />
            </a>
          </div>
          <div className="flex md:order-2">
            <ButtonProfile handleLogout={handleLogout} isLogin={isLogin} userData={userData} isLoading={isLoading} />
          </div>
          <div
            className="hidden justify-be tween items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul className="nav-profile flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/home-sponcerships">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-sm md:border-0  md:p-0 dark:hover:text-[#4998DD] dark:text[#222325] dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-sm md:border-0  md:p-0 dark:hover:text-[#4998DD] dark:text[#222325] dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Profile
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/influencers">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-sm md:border-0  md:p-0 dark:hover:text-[#4998DD] dark:text[#222325] dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Influencers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/notification">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-sm  md:p-0 dark:hover:text-[#4998DD] dark:text[#222325] dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Notification
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
