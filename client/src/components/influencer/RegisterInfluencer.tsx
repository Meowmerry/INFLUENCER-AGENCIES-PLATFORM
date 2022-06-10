import React, { FunctionComponent, useState } from 'react';


interface RegisterInfluencerProps { }

const RegisterInfluencer: FunctionComponent<RegisterInfluencerProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div className='max-h-full md:flex flex-row mt-40'>
          RegisterInfluencer
        </div>
    )
}

export default RegisterInfluencer;