import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReviewBox from './ReviewBox';

const ReviewContainer = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <Grid container spacing={2} sx={{height: '100%'}}>
            {
                reviews.map(review => <ReviewBox key={Math.random() * 4} review={review}></ReviewBox>)
            }
        </Grid>
    );
};

export default ReviewContainer;