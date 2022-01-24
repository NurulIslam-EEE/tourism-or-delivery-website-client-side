import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [orderLength, setOrderLength] = useState(false);
    useEffect(() => {
        setOrderLength(false)
        fetch(`https://fathomless-ocean-50627.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyOrder(data)
                setOrderLength(true)
            });

    }, [user?.email]);

    const handleDeleteOrder = (id) => {
        const procced = window.confirm('Are you sure,You Want to delete?');
        console.log(id);
        if (procced) {
            fetch(`https://fathomless-ocean-50627.herokuapp.com/myOrder/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert('Delete successfully')
                        const remaining = myOrder.filter(order => order._id !== id);
                        setMyOrder(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {myOrder?.length === 0 ? <h1 className='text-danger'>You didn't place any order</h1> :
                <div className="m-0 row">

                    {
                        myOrder.map(order =>
                            <div className="col-md-4" key={order?._id}>
                                <Card className='m-3 text-start' style={{ width: '90%' }}>
                                    <Card.Img variant="top" src={order?.imgUrl} />
                                    <Card.Body>
                                        <Card.Title>{order?.title}</Card.Title>
                                        <Card.Text>

                                            Status:  {order?.status}
                                        </Card.Text>
                                        <Button onClick={() => handleDeleteOrder(order._id)} className='card-btn' variant="primary">Delete</Button>

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

export default MyOrder;