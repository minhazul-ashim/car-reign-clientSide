import { Paper, Typography } from '@mui/material';
import React from 'react';

const CarBox = (props) => {

    const { car, setDisplayed } = props;

    const handleClick = () => {

        setDisplayed(car)
    }

    return (
        <Paper elevation={1} sx={{
            p: '3%'
        }}>
            <Typography onClick={handleClick} variant='h4'>
                {car.name}
            </Typography>
            <Typography variant='subtitle1'>
                Manufracturer: {car.manufrac}
            </Typography>
        </Paper>
    );
};

export default CarBox;