import React, { FunctionComponent, useState } from 'react';


interface RegisterCompanyProps { }

const RegisterCompany: FunctionComponent<RegisterCompanyProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div className="container mt-12 px-24 pt-1 mx-auto ">
        <section className=" text-gray-800 text-center md:text-left">
          <div className="mt-18 mx-auto max-h-full md:flex flex-row px-14 pb-16 pt-10 shadow-lg shadow-[#4998DD] bg-white border-solid border-1.5 rounded-lg border-gray-300" >
            <form className="w-full ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Account Information
              </label>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                
                  <input   //border-rose-500 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="companyName"
                    name="companyName"
                    type="companyName"
                    autoComplete="companyName"
                    required
                    placeholder="Company Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="webSite"
                    name="webSite"
                    type="webSite"
                    autoComplete="webSite"
                    required
                    placeholder="Website URL"
                  />
                </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                
                  <input   //border-rose-500 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    autoComplete="firstName"
                    required
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    autoComplete="lastName"
                    required
                    placeholder="Last Name"
                  />
                </div>
              </div>
             
              <div className="mt-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Address
                </label>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      required
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-last-name"
                      type="text"
                      placeholder="City"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Country"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-last-name"
                      type="text"
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Contact
                </label>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="Password"
                    />
                    <p className="text-gray-600 text-xs italic mt-1">
                      Password should be 6 chars minimum!
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button  className="w-80 text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2">
                 Sign Up
                </button>
              </div>
              <div className="mt-4 text-sm leading-snug  text-center flex justify-center">
                 <p>Already have an account?</p> 
              </div>
              <div className="mt-6 flex justify-center">
                <button  className="w-80 text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2">
                 Sign In
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
}

export default RegisterCompany;