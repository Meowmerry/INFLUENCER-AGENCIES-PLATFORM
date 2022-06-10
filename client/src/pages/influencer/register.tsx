import React, { FunctionComponent, useState } from 'react';
import RegisterInfluencer from '../../components/influencer/RegisterInfluencer';
import { NavBar } from '../../components/nav-bar/NavBar';



interface RegisterIncPageProps  {}

const RegisterInfluencerPage: FunctionComponent<RegisterIncPageProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div>  <NavBar /><RegisterInfluencer />  </div>
    )
}

export default RegisterInfluencerPage;