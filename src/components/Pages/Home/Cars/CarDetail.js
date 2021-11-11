import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const CarDetail = () => {

    const [car, setCar] = useState(null);

    const [formInfo, setFormInfo] = useState({})

    const { id } = useParams();

    const handleBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const info = { ...formInfo }
        info['product'] = car.name;
        info[field] = value;

        setFormInfo(info)
    }

    const handleOrder = () => {

        console.log(formInfo)
    }

    useEffect(() => {

        fetch(`http://localhost:5000/carinfo/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container padding={5} spacing={3}>

                    <Grid item xs={12} md={6}>
                        <Paper elevation={0}>
                            <img src="https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" style={{ width: '100%', height: '250px', objectFit: 'cover' }} alt="" />
                            <Typography variant='h4'>
                                {car?.name}
                            </Typography>
                            <Typography variant='h5'>
                                Manufracturer: {car?.manufrac}
                            </Typography>
                            <Typography variant='h5'>
                                Engine: {car?.engine}
                            </Typography>
                            <Typography variant='h6'>
                                Weight: {car?.weight} kg's
                            </Typography>
                            <Typography variant='h6'>
                                Category: {car?.category}
                            </Typography>
                            <Typography variant='h5'>
                                Price: ${car?.price}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Typography variant='h5'>
                            Place Order Information
                        </Typography>

                        <TextField name='name' onBlur={handleBlur} label="Your Full Name" variant="standard" sx={{ width: '100%' }} />

                        <TextField name='email' onBlur={handleBlur} label="Your Email Address" variant="standard" sx={{ width: '100%' }} />

                        <TextField name='nid' onBlur={handleBlur} label="Your National ID Number" variant="standard" sx={{ width: '100%' }} />


                        <TextField name='phone' onBlur={handleBlur} label="Your Phone Number" variant="standard" sx={{ width: '100%' }} />

                        <TextField disabled onBlur={handleBlur} label={car?.name} defaultValue={car?.name} variant="standard" sx={{ width: '100%', mb: '3%' }} />

                        <Button onClick={handleOrder} variant='outlined'>
                            Place Order
                        </Button>

                    </Grid>

                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default CarDetail;