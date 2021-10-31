import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const ManageAllOrders = () => {
    const { user } = useFirebase({});
    const [allOrder, setAllOrder] = useState([]);
    const [depend, setDepend] = useState('');
    useEffect(() => {
        fetch('https://fathomless-ocean-50627.herokuapp.com/manageAllOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [depend]);

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure,You Want to delete?');
        console.log(id);
        if (proceed) {
            fetch(`https://fathomless-ocean-50627.herokuapp.com/myOrder/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert('Delete successfully')
                        const remaining = allOrder.filter(order => order._id !== id);
                        setAllOrder(remaining);
                    }
                })
        }
    }


    const handleStatus = (id) => {

        setDepend(id);
        const updateStatus = { status: 'Approved' }

        fetch(`https://fathomless-ocean-50627.herokuapp.com/manageAllOrder/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setDepend('')
                }
            })

    }
    return (
        <div className="p-3 m-0 row">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order Details</th>
                    </tr>
                </thead>
                {allOrder?.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td className='text-start'>
                                Package Name:{order?.title} <br />
                                Customer: {user?.displayName} <br />
                                Status:{order?.status} <br />

                                <button onClick={() => handleStatus(order._id)}>Approve</button>
                                <button onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}

            </Table>
        </div>

    );
};

export default ManageAllOrders;