import React from 'react';
import { useForm } from "react-hook-form";

const AddTourPackages = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addTours', {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='title' {...register("title", { required: true })} /> <br />
            <input placeholder='description'  {...register("description", { required: true })} /> <br />
            <input placeholder='Image Url'  {...register("imgUrl", { required: true })} /> <br />

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default AddTourPackages;