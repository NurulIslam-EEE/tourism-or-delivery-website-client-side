import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import { useForm } from "react-hook-form";
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useFirebase();
    const { id } = useParams();
    const [tourPackage, setTourPackage] = useState({});

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        data.status = 'Pending';
        data.imgUrl = tourPackage.imgUrl;
        data.title = tourPackage.title;
        console.log(data)

        fetch("https://fathomless-ocean-50627.herokuapp.com/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Ordered Successfully')
                    reset();
                }
            });

    }

    useEffect(() => {
        fetch(`https://fathomless-ocean-50627.herokuapp.com/tourPackages/${id}`)
            .then(res => res.json())
            .then(data => setTourPackage(data))
    }, [])

    return (
        <div className='m-0 row'>
            <h3><i class="fas fa-user"></i> {user.displayName}</h3>
            <p><i class="fas fa-envelope"></i> {user.email}</p>
            <div className="mb-3 col-md-7 text-start ps-5">

                <img className='w-75' src={tourPackage.imgUrl} alt="" />
                <h3>{tourPackage?.title}</h3>
                <h3>USD:{tourPackage?.price}</h3>
                <h3>Time required:{tourPackage?.time} hours</h3>
            </div>

            <div className="my-3 col-md-5 place-order">
                <h3>Please fill up the form to book.</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' defaultValue={user.displayName}{...register("title", { required: true })} /> <br />
                    <textarea placeholder='Address'  {...register("address", { required: true })} /> <br />
                    <input placeholder='Phone Number' type='number' {...register("imgUrl", { required: true })} /> <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    {/* <input type="submit" /> */}
                    <button type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;