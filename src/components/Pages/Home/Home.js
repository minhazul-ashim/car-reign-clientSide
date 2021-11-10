import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from './Banner';
import CarsSection from './CarsSection';
import PartnerSection from './Partners/PartnerSection';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {

    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <CarsSection></CarsSection>
            <ReviewSection></ReviewSection>
            <PartnerSection></PartnerSection>
            <Footer></Footer>
        </>
    );
};

export default Home;