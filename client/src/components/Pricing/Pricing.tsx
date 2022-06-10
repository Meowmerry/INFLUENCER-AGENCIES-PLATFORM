import React, { FunctionComponent, useState } from 'react';


interface PricingProps { }

const Pricing: FunctionComponent<PricingProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <div className='max-h-full md:flex flex-row mt-40'>
          Pricing
        </div>
    )
}

export default Pricing;