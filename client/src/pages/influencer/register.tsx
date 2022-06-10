import React, { FunctionComponent, useState } from 'react';
import RegisterInfluencer from '../../components/influencer/RegisterInfluencer';



interface RegisterIncPageProps  {}

const RegisterInfluencerPage: FunctionComponent<RegisterIncPageProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div><RegisterInfluencer />  </div>
    )
}

export default RegisterInfluencerPage;