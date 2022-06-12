import React, { FunctionComponent, useState } from "react";

interface PricingProps { }

const Pricing: FunctionComponent<PricingProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="container mt-12 px-24 pt-1 mx-auto zoom-in-b-to-t">
      <div className="flex text-center text-4xl font-bold justify-center my-12" ><div>Service Fee</div></div>
      <section className=" text-gray-800 text-center md:text-left">
        <div className="flex flex-wrap justify-around">
          <div className="block w-96 p-6 text-center max-w-sm shadow-lg shadow-[#4998DD] bg-white  border-solid border-1.5 rounded-lg border-gray-300">
            <div >
              <div className="text-2xl text-[#222325] my-6 font-bold">For Influenceers</div>
              <div className="text-xl  text-[#222325] my-2 font-semibold">Sign up for free</div>
              <div className="text-[#4998DD] text-4xl font-bold mt-4">10%</div>
              <p className="text-[#4998DD] text-xs italic mt-1"> service fee </p>
              <div className="text-xl  text-[#222325] my-4 font-semibold">What Influencers get:</div>
              <div className="text-left">
                <ul className="text-base  text-[#222325] my-2 ml-16">
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Access to Sponsorships</li>
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Payment Protections</li>
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Secure Workflow</li>
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Super Fast Payments</li>
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Support Team</li>
                </ul>
              </div>

            </div>
          </div>
          <div className="block w-96 p-6 text-center max-w-sm shadow-lg shadow-[#4998DD] bg-white  border-solid border-1.5 rounded-lg border-gray-300">
            <div >
              <div className="text-2xl text-[#222325] my-6 font-bold">For Brands & Agency</div>
              <div className="text-xl  text-[#222325] my-2 font-semibold">Sign up for free</div>
              <div className="text-[#4998DD] text-4xl font-bold mt-4">10%</div>
              <p className="text-[#4998DD] text-xs italic mt-1"> service fee </p>
              <div className="text-xl  text-[#222325] my-4 font-semibold">What Brands & Agency get:</div>
              <div className="text-left">
                <ul className="text-base  text-[#222325] my-2 ml-16">
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Access to Community of Influencers</li>
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Payment Protections</li>
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Secure Workflow</li>
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Simple Payment Options</li>
                  <li className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>Support Team</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
