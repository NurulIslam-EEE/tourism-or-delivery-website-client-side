import React from 'react';
import { useForm } from "react-hook-form";
import './AddTourPackages.css';

const AddTourPackages = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://fathomless-ocean-50627.herokuapp.com/addTours', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    reset();
                    alert('Added Successfully')
                }
                console.log(data)

            })
    };
    return (
        <div className="add-tour">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='title' {...register("title", { required: true })} /> <br />
                <textarea placeholder='description'  {...register("description", { required: true })} /> <br />
                <input placeholder='Image Url'  {...register("imgUrl", { required: true })} /> <br />
                <input placeholder='Price'  {...register("price", { required: true })} /> <br />
                <input placeholder='Time'  {...register("time", { required: true })} /> <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <button type="submit">Submit</button>
            </form>
        </div>

    );
};

export default AddTourPackages;