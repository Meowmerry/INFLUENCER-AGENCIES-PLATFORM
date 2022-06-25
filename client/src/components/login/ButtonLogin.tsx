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
            className="inline-flex justify-center w-full text-white  text-base focus:ring-2 focus:outline-none font-medium rounded-lg px-5 py-2 text-center bg-gradient-to-r  from-cyan-500 to-blue-500 hover:from-green-500 hover:to-blue-500">
            LOGIN
          </Menu.Button>
        </div>
      </Menu>
    </>
  );
}
