import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TourPackages.css'

const TourPackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-ocean-50627.herokuapp.com/tourPackages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
            })
    }, [])
    return (
        <div>
            {packages.length === 0 ? <Spinner animation="border" variant="warning" /> :
                <div className="m-0 row">
                    <h1>Check out our most popular tours in UAE</h1>
                    {
                        packages.map(pkg =>
                            <div className="col-md-4" key={pkg._id}>
                                <Card className='m-3 text-start' style={{ width: '90%' }}>
                                    <Card.Img variant="top" src={pkg.imgUrl} />
                                    <Card.Body>
                                        <Card.Title>{pkg.title}</Card.Title>
                                        <Card.Text>
                                            {pkg.description}
                                        </Card.Text>
                                        <Link to={`/placeOrder/${pkg._id}`}><Button className='card-btn' variant="primary">Book Now</Button></Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                </div>

            }

        </div>
    );
};

export default TourPackages;