import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import CarBox from '../Home/Cars/CarBox';

const Explore = () => {

    const [allCars, setAllCars] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                setAllCars(data);
            })
    }, [])

    return (
        <> <Navigation></Navigation>

            <Grid container spacing={4} py={5}>
                {
                    allCars.map(car => <CarBox car={car} key={car.name}></CarBox>)
                }
            </Grid>

            <Footer></Footer>
        </>
    )
}

export default Explore;
