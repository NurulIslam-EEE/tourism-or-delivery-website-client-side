import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import TourPackages from '../TourPackages/TourPackages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <TourPackages></TourPackages>
        </div>
    );
};

export default Home;