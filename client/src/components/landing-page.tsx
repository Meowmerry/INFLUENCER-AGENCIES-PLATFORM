
import React from 'react';

export const LadingPage = () => {
  return (
  
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">
              Trusted by 2,000,000+ <br />
              <u className="">developers and designers</u>
            </h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quas?
            </p>
            <a
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              >Pre-order now</a>
          </div>
    
          <div className="mb-6 md:mb-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-12">
                <img
                  src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo6-1.png"
                  className="grayscale px-6"
                  alt="Nasa - logo"
                />
                                 {/* <Image src="/assets/images/logo2x.jpg" layout='fill' alt="Logo" width="64" height="64"  /> */}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
