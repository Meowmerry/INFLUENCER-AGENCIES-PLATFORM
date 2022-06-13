/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function LoginButton() {
  const router = useRouter();

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            onClick={() => router.push('/login')}
            className="inline-flex justify-center w-full text-white  text-base focus:ring-2 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center bg-gradient-to-r  from-cyan-500 to-blue-500 hover:from-green-500 hover:to-blue-500">
            LOGIN
            {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
          </Menu.Button>
        </div>
        {/* 
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/login"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    INFLUENCER
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/login"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    AGENCY
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <a
                    href="/signout"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                      SIGN OUT
                    </a>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition> */}
      </Menu>
    </>
  );
}
