import React, { FunctionComponent, useState } from 'react';


interface RegisterCompanyProps { }

const RegisterCompany: FunctionComponent<RegisterCompanyProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div className='max-h-full md:flex flex-row mt-40'>
            {/* <div className='md:w-3/5 md:pl-56 pl-28'>
                <div className='text-3xl '>Access to tons of </div>
                <div className='text-3xl'>Influencers </div>
            </div>
            <div className='md:w-2/5 flex justify-center'>
            Pic
            </div> */}
            Company Landing
        </div>
    )
}

export default RegisterCompany;