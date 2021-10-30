import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.png'
const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='m-3' src={error} alt="" /> <br />
            <Link to='/home'><button className="m-5 card-btn w-25">Go Home</button></Link>

        </div>
    );
};

export default NotFound;