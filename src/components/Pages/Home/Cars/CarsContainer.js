import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CarBox from './CarBox';

const CarsContainer = () => {

    const [allCars, setAllCars] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                setAllCars(data);
            })
    }, [])

    return (
        <Grid container spacing={4}>
            {
                allCars.slice(0, 6).map(car => <CarBox car={car} key={car.name}></CarBox>)
            }
        </Grid>
    );
};

export default CarsContainer;