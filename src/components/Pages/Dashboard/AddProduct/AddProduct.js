import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <Box>
            <Typography variant='h4'>Add A Product</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name")} style={{ width: '75%', border: '1px solid #999', height: '25px', marginBottom: '2%' }} placeholder='Enter Product Name' />
                {errors.name && <span>This field is required</span>}

                <input {...register("manufrac", { required: true })} style={{ width: '75%', border: '1px solid #999', height: '25px', marginBottom: '2%' }} placeholder='Enter the manufracturer name' />
                {errors.manufrac && <span>This field is required</span>}

                <input {...register("engine", { required: true })} style={{ width: '75%', border: '1px solid #999', height: '25px', marginBottom: '2%' }} placeholder='Enter the engine type' />
                {errors.engine && <span>This field is required</span>}

                <input {...register("weight", { required: true })} style={{ width: '75%', border: '1px solid #999', height: '25px', marginBottom: '2%' }} placeholder='Enter approximate weight' />
                {errors.weight && <span>This field is required</span>}

                <input {...register("category", { required: true })} style={{ width: '75%', border: '1px solid #999', height: '25px', marginBottom: '2%' }} placeholder='Enter the vehicle category' />
                {errors.category && <span>This field is required</span>}

                <input {...register("price", { required: true })} style={{ width: '75%', border: '1px solid #999', height: '25px', marginBottom: '2%' }} placeholder='Enter the selling price' />
                {errors.price && <span>This field is required</span>}

                <input {...register("img", { required: true })} style={{ width: '75%', border: '1px solid #999', height: '25px', marginBottom: '2%' }} placeholder='Enter the direct URL to the vehicle image' />
                {errors.img && <span>This field is required</span>}


                <Button type='submit' variant='contained' sx={{ display: 'block' }}>
                    Submit
                </Button>
            </form>

        </Box>
    );
};

export default AddProduct;