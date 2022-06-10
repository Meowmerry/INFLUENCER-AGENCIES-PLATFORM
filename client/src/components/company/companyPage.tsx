import React, { FunctionComponent, useState } from 'react';
import { NavBar } from "../nav-bar/NavBar";

interface CompanyPageProps  {}

const CompanyPage: FunctionComponent<CompanyPageProps> = (props) => {

    return (
        <>
         <div className="min-h-screen flex flex-col">
           
                <div className='relative flex flex-grow'>
                <NavBar />
                    
                </div>
            </div>
           
        </>
    )
}


export default CompanyPage;