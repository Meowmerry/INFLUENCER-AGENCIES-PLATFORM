import React from "react";
import { useRouter } from 'next/router'

export const LadingPage = () => {
  const router = useRouter()
  return (
    <div className="container px-6 mt-24 mx-auto">
      <section className=" text-gray-800 text-center md:text-left">
        <div className="grid md:grid-cols-2 mt-24">
          <div className="mb-6  md:mb-0 mt-12 ml-24">
            <h2 className="text-4xl font-bold mb-6">
              The Best Community Of <br />
              <u className="">Influencer Platform</u>
            </h2>
            <a
              className="w-48 text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
              href=""
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={() => router.push('/influencer')}
            >
              I'm an Influencer
            </a>
            <a
              className="w-48 text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:ml-6"
              href=""
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={() => router.push('/company')}
            >
              I'm a Brand
            </a>
          </div>

          <div className="mb-3 md:mb-0">
              <img
                src="/assets/images/influencer.png"
                width={"100%"}
                height={"100%"}
                className="cursor-pointer object-contain"
              />
          </div>
        </div>
      </section>
    </div>
  );
};
