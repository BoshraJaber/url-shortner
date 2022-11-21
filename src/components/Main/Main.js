import React, { Suspense } from 'react';

const Hero = React.lazy(() => import('./Hero/Hero'));
const Form = React.lazy(() => import('./Form/Form'));
const Statistics = React.lazy(() => import('./Statistics/Statistics'));
const BootsLinks = React.lazy(() => import('./BoostLinks/BoostLinks'));


const Main = () => {
    return (
        <>
            <Hero />
            <Suspense fallback={<section>Loading...</section>}>
                <Form />
                <Statistics />
                <BootsLinks />
            </Suspense>
        </>
    )
}

export default Main;