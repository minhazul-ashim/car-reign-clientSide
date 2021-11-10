import { Container, Typography } from '@mui/material';
import React from 'react';
import ReviewContainer from './ReviewContainer';

const ReviewSection = () => {
    return (
        <>
            <Container>
                <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    Testimonials
                </Typography>
                <ReviewContainer></ReviewContainer>
            </Container>
        </>
    );
};

export default ReviewSection;