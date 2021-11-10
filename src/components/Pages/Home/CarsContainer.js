import { Button, Grid, Paper, Typography } from '@mui/material';
import { display } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CarBox from './CarBox';

const CarsContainer = () => {

    const [allCars, setAllCars] = useState([]);
    const [displayed, setDisplayed] = useState({});

    useEffect(() => {

        fetch('/cars.json')
            .then(res => res.json())
            .then(data => {
                setAllCars(data);
                setDisplayed(data[0])
            })
    }, [])

    return (
        <Grid container>
            <Grid item xs={12} md={7}>
                <Paper elevation={0}>
                    <img src='https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' style={{
                        width: '75%', height: '300px', objectFit: 'cover'
                    }} alt="" />
                    <Typography variant='h4'>
                        {displayed.name}
                    </Typography>
                    <Typography variant='h5'>
                        Manufracturer: {displayed.manufrac}
                    </Typography>
                    <Typography variant='h5'>
                        Price: ${displayed.price}
                    </Typography>
                    <Button variant='outlined'>
                        View Details
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
                {
                    allCars.slice(0, 6).map(car => {
                        return <CarBox key={car.name} car={car} setDisplayed={setDisplayed}></CarBox>
                    })
                }
            </Grid>
        </Grid>
    );
};

export default CarsContainer;