import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from './Banner';
import CarsSection from './CarsSection';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {

    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <CarsSection></CarsSection>
            <ReviewSection></ReviewSection>
        </>
    );
};

export default Home;