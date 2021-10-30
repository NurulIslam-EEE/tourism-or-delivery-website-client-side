import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import { useForm } from "react-hook-form";

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
        fetch(`http://localhost:5000/tourPackages/${id}`)
            .then(res => res.json())
            .then(data => setTourPackage(data))
    }, [])
    return (
        <div className='m-0 row'>
            <h3>User:{user.displayName}</h3>
            <p>Email:{user.email}</p>
            <div className="col-md-7">
                <h3>{tourPackage.title}</h3>
                <img className='w-75' src={tourPackage.imgUrl} alt="" />
            </div>

            <div className="my-3 col-md-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' defaultValue={user.displayName}{...register("title", { required: true })} /> <br />
                    <input placeholder='Address'  {...register("address", { required: true })} /> <br />
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