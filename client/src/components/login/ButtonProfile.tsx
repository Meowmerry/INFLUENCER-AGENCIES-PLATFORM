/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState,FunctionComponent } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
interface ButtonProfileProps { }
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export  const ButtonProfile: FunctionComponent<ButtonProfileProps> = ( props ) => {
  const router = useRouter();

  return (
    <>
     <div className="dropdown relative">
        <button
          className="
            dropdown-toggle
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg active:text-white
            transition
            duration-150
            ease-in-out
            flex
            items-center
            whitespace-nowrap
          "
          type="button"
          id="dropdownMenuButton1ds"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          USER
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="svg-inline--fa fa-caret-down w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </button>
        <ul
          className="
            dropdown-menu
            min-w-max
            absolute
            hidden
            bg-white
            text-base
            z-50
            float-left
            py-2
            list-none
            text-left
            rounded-lg
            shadow-lg
            mt-1
            m-0
            bg-clip-padding
            border-none
          "
          aria-labelledby="dropdownMenuButton1ds"
        >
          <li>
            <a
              className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
              href="#"
              >Action</a>
          </li>
          <li>
            <a
              className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
              href="#"
              >Another action</a>
          </li>
          <li>
            <a
              className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-400
                pointer-events-none
              "
              href="#"
            >Something else here
            </a>
          </li>
        </ul>
      </div>
    
    </>
  );
}
   {/* <div className="user-text">User </div>
         <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="rounded-full"
                style={{ height: "50px", width: "50px" }}
                alt=""
                loading="lazy"
              />
        </a> */}