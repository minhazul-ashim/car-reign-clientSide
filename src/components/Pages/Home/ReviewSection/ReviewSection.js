import { Container, Typography } from '@mui/material';
import React from 'react';
import ReviewContainer from './ReviewContainer';

const ReviewSection = () => {
    return (
        <>
            <Container sx={{ my: '5%' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', my: '5%' }}>
                    Testimonials
                </Typography>
                <ReviewContainer></ReviewContainer>
            </Container>
        </>
    );
};

export default ReviewSection;