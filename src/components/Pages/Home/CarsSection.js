import { Container, Typography } from '@mui/material';
import React from 'react';
import CarsContainer from './CarsContainer';

const CarsSection = () => {
    return (
        <Container sx={{ p: '5% 0' }}>
            <Typography variant='h4' sx={{ textAlign: 'center' }}>
                Our Collection
            </Typography>
            <CarsContainer></CarsContainer>
        </Container>
    );
};

export default CarsSection;