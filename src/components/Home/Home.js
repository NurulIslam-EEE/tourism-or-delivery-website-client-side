import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import TourPackages from '../TourPackages/TourPackages';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { packages } = useFirebase();
    return (
        <div>
            {packages?.length === 0 ? <Spinner animation="border" variant="warning" /> :
                <div>
                    <Banner></Banner>
                    <AboutUs></AboutUs>
                    <TourPackages></TourPackages>
                </div>
            }


        </div>
    );
};

export default Home;