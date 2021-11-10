import { Container, Typography } from '@mui/material';
import React from 'react';
import CarsContainer from './CarsContainer';

const CarsSection = () => {
    return (
        <Container sx={{ my: '5%' }}>
            <Typography variant='h4' sx={{ textAlign: 'center', my: '5%' }}>
                Our Collection
            </Typography>
            <CarsContainer></CarsContainer>
        </Container>
    );
};

export default CarsSection;