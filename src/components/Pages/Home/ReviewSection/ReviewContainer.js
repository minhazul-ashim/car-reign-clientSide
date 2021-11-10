import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReviewBox from './ReviewBox';

const ReviewContainer = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <Grid container spacing={2}>
            {
                reviews.map(review => <ReviewBox key={Math.random() * 4} review={review}></ReviewBox>)
            }
        </Grid>
    );
};

export default ReviewContainer;