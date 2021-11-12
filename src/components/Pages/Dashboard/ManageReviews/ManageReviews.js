import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageReviews = () => {

    const [reviews, setReviews] = useState([]);

    const loadReviews = () => {

        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }

    const handleDeletion = (id) => [

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                loadReviews()
            })
    ]

    useEffect(loadReviews, [])

    return (
        <Box>
            <Typography variant='h4' sx={{ mb: '5%' }}>
                All Reviews
            </Typography>

            <Grid container spacing={2}>

                {
                    reviews.map(review => {

                        return (
                            <Grid key={review._id} item xs={6} md={4}>

                                <Paper elevation={0}>
                                    <Typography variant='h6' sx={{ display: 'block' }}>
                                        {review.client}
                                    </Typography>
                                    <Typography variant='body2' sx={{ display: 'block' }}>
                                        Profession: {review.profession}
                                    </Typography>
                                    <Typography variant='body2' sx={{ display: 'block' }}>
                                        Company: {review.company}
                                    </Typography>
                                    <Typography variant='body2' sx={{ display: 'block' }}>
                                        Email: {review.email}
                                    </Typography>
                                    <Typography variant='body' sx={{ display: 'block', my: '5%' }}>
                                        Review: {review.message}
                                    </Typography>

                                    <Button onClick={() => handleDeletion(review._id)} variant='contained'>
                                        Delete Review
                                    </Button>
                                </Paper>

                            </Grid>
                        )
                    })
                }

            </Grid>

        </Box>
    );
};

export default ManageReviews;