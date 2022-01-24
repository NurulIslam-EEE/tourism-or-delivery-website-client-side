import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import TourPackages from '../TourPackages/TourPackages';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

const Home = () => {
    const { packages } = useAuth();
    console.log(packages)
    return (
        <div>

            <Banner />

            <TourPackages />
        </div>



    );
};

export default Home;