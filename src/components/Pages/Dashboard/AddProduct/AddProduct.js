import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {

    const [cars, setCars] = useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const loadProducts = () => {

        fetch('https://thawing-tor-41615.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })
    }

    const handleDeletion = (id) => {

        const proceed = window.confirm('Do you really want to delete?');

        if(proceed) {
            
            fetch(`https://thawing-tor-41615.herokuapp.com/cars/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => loadProducts())
        }
    }

    useEffect(loadProducts, [])


    const onSubmit = (data) => {

        fetch('https://thawing-tor-41615.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                loadProducts()
                reset()
            })
    };

    return (
        <>
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

            <Box width={1} marginTop='5%'>

                <Typography variant='h4' sx={{ mb: '5%' }}>
                    Current Available Products
                </Typography>

                {
                    cars.map(car => {
                        return <Paper elevation={0} sx={{ display: 'flex', justifyContent: 'space-between', mb: '2%' }}>

                            <Typography variant='h6'>
                                {car.name} ({car.manufrac})
                            </Typography>

                            <Button onClick={() => handleDeletion(car._id)} variant='contained' sx={{ background: 'rgba(255,0,0, 0.6)' }}>
                                Delete
                            </Button>

                        </Paper>
                    })
                }

            </Box>
        </>

    );
};

export default AddProduct;