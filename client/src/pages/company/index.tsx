import React, { FunctionComponent, useState } from 'react';
import { useRouter } from "next/router";

interface CompanyLandingProps { }

const CompanyLanding: FunctionComponent<CompanyLandingProps> = (props) => {
    const router = useRouter();

    return (
        <div>Company Landing
            <div>welcome</div>
            <button onClick={() => router.push("/company/register")}>
                Company Page
            </button>
        </div>
    )
}

export default CompanyLanding;