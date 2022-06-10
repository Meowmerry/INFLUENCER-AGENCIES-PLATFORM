import React, { FunctionComponent, useState } from 'react';
import { useRouter } from "next/router";
import  CompanyPage from "../../components/company/companyPage";


interface CompanyLandingProps { }

const CompanyLanding: FunctionComponent<CompanyLandingProps> = (props) => {
    const router = useRouter();

    return (
        <>
           <CompanyPage/>
           <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="0"
                        fill="rgba(255,255,255,0.7"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="3"
                        fill="rgba(255,255,255,0.5)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="5"
                        fill="rgba(255,255,255,0.3)"
                    />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
            {/* <div className="container h-4/5  px-6 mt-10 mx-auto">
            </div> */}
            {/* <div className='h-screen  bg-gradient-to-br  from-teal-50 to-cyan-400'>
                <div className='md:flex flex-row mt-60 '>
                    <div className='md:w-3/5 md:pl-56 pl-28'>
                        <div className='text-4xl font-bold'>Access to tons of </div>
                        <div className='text-4xl font-bold'>Influencers </div>
                        <button className='my-10 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => router.push("/company/register")}>
                            Get Started
                        </button>
                    </div>
                    <div className='md:w-2/5 flex justify-center'>
                        Pic
                        <img src={require('../../assets/images/inflencer.png')} />
                    </div>
                </div>
            </div> */}

        </>

    )
}

export default CompanyLanding;