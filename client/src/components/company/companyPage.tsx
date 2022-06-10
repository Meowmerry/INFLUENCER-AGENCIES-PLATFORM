import React, { FunctionComponent, useState } from 'react';
import { NavBar } from "../nav-bar/NavBar";
import { useRouter } from "next/router";

interface CompanyPageProps { }

const CompanyPage: FunctionComponent<CompanyPageProps> = (props) => {
    const router = useRouter();

    return (
        <>

            <div className="min-h-screen flex flex-col">
                <NavBar />
                <div className='relative flex flex-grow'>
                    <div className="container px-6 mt-24 mx-auto">
                        <section className=" text-gray-800 text-center md:text-left">
                            <div className="grid md:grid-cols-2 mt-24">
                                <div className="mb-6  md:mb-0 mt-12 ml-24">
                                    <h2 className="text-4xl font-bold mb-6">
                                        Access to tons of <br />
                                        Influencer
                                    </h2>
                                    <a
                                        className="w-48 text-center inline-block px-7 py-3 bg-[#4998DD] text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
                                        href="#!"
                                        role="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        onClick={() => router.push('/influencer')}
                                    >
                                        Get Started
                                    </a>

                                </div>

                                <div className=" bottom-3 right-3 object-scale-down">
                                    <img
                                        src="/assets/images/company.png"
                                        width={"70%"}
                                        height={"100%"}
                                        className="cursor-pointer object-contain"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>

        </>
    )
}


export default CompanyPage;