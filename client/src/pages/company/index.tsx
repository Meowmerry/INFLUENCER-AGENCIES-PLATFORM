import React, { FunctionComponent, useState } from 'react';
import { useRouter } from "next/router";
import men from '../../assets/images/inflencer.png';

interface CompanyLandingProps { }

const CompanyLanding: FunctionComponent<CompanyLandingProps> = (props) => {
    const router = useRouter();

    return (
        // <div>Company Landing
        //     <div>welcome</div>
        //     <button onClick={() => router.push("/company/register")}>
        //         Company Page
        //     </button>
        // </div>
        <div className='h-screen  bg-gradient-to-br  from-teal-50 to-cyan-400'>
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
                    {/* <img src={men[0]} alt='influencer'></img> */}
                    <img src={require('../../assets/images/inflencer.png')} />
                </div>
            </div>
        </div>

    )
}

export default CompanyLanding;