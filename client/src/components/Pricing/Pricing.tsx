import React, { FunctionComponent, useState } from "react";

interface PricingProps {}

const Pricing: FunctionComponent<PricingProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="container mt-12 px-24 pt-1 mx-auto zoom-in-b-to-t">
         <div className="flex text-center text-3xl font-bold justify-center my-12"><div>Service Fee</div></div>
      <section className=" text-gray-800 text-center md:text-left">
        <div className="grid grid-cols-2 gap-4">
          <div className="block p-6 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
            <div >
              <div>For Influenceers</div>
              <div>Sign up for free</div>
              <div>10%</div>
              <p className="text-[#4998DD] text-xs italic mt-1"> service fee </p>
              <div>What Influencers get:</div>
              <div className="text-left">
              <ul>
                <li>Access to sponsorships</li>
                <li>Payment protections</li>
                <li>Secure workflow</li>
                <li>Super fast payments</li>
                <li>Support team</li>
              </ul>
              </div>
            
            </div>
          </div>
          <div>
            <div>
              <div>For brand & Agencies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
