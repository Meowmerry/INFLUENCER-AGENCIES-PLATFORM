import React, { FunctionComponent, useState } from 'react';
import RegisterCompany from '../../components/company/RegisterCompany';


interface RegisterPageProps  {}

const RegisterPage: FunctionComponent<RegisterPageProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div><RegisterCompany />  </div>
    )
}

export default RegisterPage;