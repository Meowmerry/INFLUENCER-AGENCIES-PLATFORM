import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

interface InfluncerLandingProps {}

const InfluncerLanding: FunctionComponent<InfluncerLandingProps> = () => {
  const router = useRouter();
  return (
    <div className="container px-6 mt-24 mx-auto zoom-in-b-to-t z-40">
      <section className=" text-gray-800 text-center md:text-left">
        <div className="grid md:grid-cols-2 mt-24">
          <div className="mb-6 mt-16 ml-36 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">
              Finding Sponsorships <br />
              <u className="">in Just a Few Clicks</u>
            </h2>
            <a
              className="w-48 text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={() => router.push("/influencer/register")}
            >
              View Sponsors
            </a>
          </div>
          <div className="mb-3 md:mb-0">
            <img
              src="/assets/images/inflencer.png"
              width={"70%"}
              height={"70%"}
              className="cursor-pointer object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default InfluncerLanding;
