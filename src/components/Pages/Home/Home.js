import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from './Banner';
import CarsSection from './CarsSection';

const Home = () => {

    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <CarsSection></CarsSection>
        </>
    );
};

export default Home;