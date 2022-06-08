import React, { FunctionComponent, useState } from 'react';


interface RegisterCompanyProps  {}

const RegisterCompany: FunctionComponent<RegisterCompanyProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div>Register Company
            <div className='text-red-700'>Hi </div>
        </div>
    )
}

export default RegisterCompany;