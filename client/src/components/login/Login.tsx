import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="container  px-20 pt-1 mx-auto zoom-in-b-to-t-log">
      <div className="flex text-center text-4xl font-bold justify-center my-8">
        <div>Login</div>
      </div>
      <section className="text-center md:text-left flex justify-center">
        <div className="bg-white w-[35%] shadow-md  px-8 pt-6 pb-8 mb-4 shadow-[#4998DD]  border-solid border-1.5 rounded-lg border-gray-300">
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Login As
              </label>
              <select
                className="form-select form-select-sm appearance-none block w-full text-sm font-normal  text-gray-700 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out bg-gray-200   py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                aria-label=".form-select-sm example"
              >
                <option value="influencer">INFLUENCER</option>
                <option value="influencer">BRAND & AGENCY</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder=""
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Remember me
              </label>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="w-80 text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2">
                Login
              </button>
            </div>
            <div className="mt-4 flex justify-center ">
              <a href="#" className="hover:text-[#4998DD] text-gray-900" onClick={() => router.push('/forgetpassword')}>Forget Password</a>
            </div>
            <div className="mt-3 flex justify-center text-gray-900">No Account Yet?</div>
            <div className="mt-4 flex justify-center">
              <a
                onClick={() => router.push("/influencer/register")}
                href="#"
                className="w-80 text-center cursor-pointer inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
              >
                Sing UP As a Brand
              </a>
            </div>

            <div className="mt-4 flex justify-center">
              <a
                onClick={() => router.push("/company/register")}
                href="#"
                className="w-80 cursor-pointer text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
              >
                Sign Up As an Influencer
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
