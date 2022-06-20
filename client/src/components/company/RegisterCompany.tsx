import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form';
import { CompanyRegister,CompanyAddress, CompanyFormData } from './interface/company-interface-data';
import Swal from "sweetalert2";  
import { registerCompany } from '../../services/api/register';
import { LoadingSpinner } from '../loading/Loaging';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
interface RegisterCompanyProps { }

const RegisterCompany: FunctionComponent<RegisterCompanyProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm<CompanyRegister>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [checkEmail, setCheckEmail] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  const onSubmit: SubmitHandler<CompanyRegister> = async (
    data: CompanyFormData 
   ) => {
     const address: CompanyAddress = {
       address: data.address.address,
       city: data.address.address,
       country: data.address.address,
       zipcode: data.address.address,
     };
 
     if (data.password.length < 6) {
       setCheckPassword(true)
     } else {
       setCheckPassword(false)
     }
    const newCompany= {
       companyName: data.companyName,
       webSite:data.webSite,
       firstName: data.firstName,
       lastName: data.lastName,
       email: data.email,
       password: data.password,
       address: address,
       role: "brand",
    };
     const newData = JSON.stringify(newCompany);
 
     try {
       const res = await registerCompany(newData);
       // yup , sweet alert
       if (res?.status) {
           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Your work has been saved',
             showConfirmButton: false,
             timer: 2000
           })
        window.location.reload()
       } else {
        setCheckEmail(true)
         Swal.fire({
           position: 'top-end',
           icon: 'error',
           title: 'Something went wrong!',
           showConfirmButton: false,
           timer: 1500
         })
         setCheckEmail(false)
       }
     } catch (err) {
       console.error(err);
     } finally {
       setIsLoading(false);
     }
   };
    return (
      <div className="container mt-12 px-24 pt-1 mx-auto zoom-in-b-to-t-log">
        {isLoading ? <LoadingSpinner /> :
          <section className=" text-gray-800 text-center md:text-left">
            <div className="mt-18 mx-auto max-h-full md:flex flex-row px-14 pb-16 pt-10 shadow-lg shadow-[#4998DD] bg-white border-solid border-1.5 rounded-lg border-gray-300" >
              <form className="w-full "  onSubmit={handleSubmit(onSubmit)}>
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
                      {...register("companyName")}
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
                      {...register("webSite")}
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
                      {...register("firstName")}
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
                      {...register("lastName")}
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
                    htmlFor="grid-first-address"
                  >
                    Address
                  </label>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-address-address"
                        {...register("address.address")}
                        type="text"
                        required
                        placeholder="Address"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-last-city"
                        type="text"
                        {...register("address.city")}
                        placeholder="City"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-country"
                        type="text"
                        {...register("address.country")}
                        placeholder="Country"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-last-name"
                        type="text"
                        {...register("address.zipcode")}
                        placeholder="Zip Code"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-contact"
                  >
                    Contact
                  </label>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input
                        id="email-address"
                        {...register("email", {
                          required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Email address"
                      />
                         {checkEmail ? <p className="text-red-700 text-xs italic mt-1">
                    Email already exists, please sign up with other email!
                    </p> : null}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <div className="eye_div">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="password"
                        {...register("password")}
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        placeholder="Password"
                      />
                      <div
                        className="icon_button absolute eye-icon-company"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeIcon className="h-5 text-gray-500 cursor-pointer" />
                        ) : (
                          <EyeOffIcon className="h-5 text-gray-500 cursor-pointer" />
                        )}
                      </div>
                    </div>
                    {checkPassword ? <p className="text-red-700 text-xs italic mt-1">
                    Password too short - should be 6 chars minimum!
                    </p> : null}
                
                  </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                <button className="w-80 text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2">
                  Sign Up
                </button>
              </div>
              <div className="mt-4 text-sm leading-snug  text-center flex justify-center">
                <p>Already have an account?</p>
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  onClick={() => router.push("/login")}
                  href="#"
                  className="w-80 text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
                >
                  Sign In
                </a>
              </div>
              </form>
            </div>
          </section>}
      </div>
    )
}

export default RegisterCompany;