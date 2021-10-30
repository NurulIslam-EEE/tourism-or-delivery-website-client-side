import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='m-0 row footer'>
            <div className="col-md-5 text-start">
                <p>t's time for that well deserved break with your family and friends for this season and to top up more fun and excitement, Royal Adventure Travel & Tourism have designed products and services that offers an extensive range of tours and packages to make it even more amazing...</p>
                <button >READ MORE</button>
            </div>
            <div className="col-md-3 text-start">
                <h3>City Tours</h3>
                <p>Grand Masjid & Ferrari World</p>
                <p>Abu Dhabi City Tour From Dubai</p>
                <p>Dubai City Tour At Affordable Price</p>
                <p>SHARJAH & AJMAN CITY TOURS</p>
                <p>AL AIN CITY TOURS</p>
            </div>
            <div className="pt-3 col-md-4 text-start">
                <p><i class="fas fa-map-marker-alt"></i> P.O. Box: 87772, Dubai UAE</p>
                <p><i class="fas fa-phone"></i> +971 4 2666606</p>
                <p><i class="fas fa-fax"></i> +971 56 1015777</p>
                <p><i class="fas fa-envelope"></i> booking@ratourism.com</p>
            </div>
            <p className="p-3">All rights reserved © 2020. Royaladventuretourism.com|Desert Safari | City Tours | Dhow Cruise |Dubai Visa|Private Tours |Transfers |Things To do in Dubai |Privacy Policy More</p>
        </div>
    );
};

export default Footer;