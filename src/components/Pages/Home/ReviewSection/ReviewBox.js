import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import ReactStars from "react-rating-stars-component";


const ReviewBox = ({ review }) => {

    const { client, message, company, profession, rating } = review;

    return (
        <Grid item xs={12} md={4} sx={{ minheight: '100%' }}>
            <Paper elevation={1} sx={{ p: '5%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ textAlign: 'center' }}>
                    {client}
                </Typography>
                <Typography variant='subtitle2' sx={{ textAlign: 'center', m: '3% 0' }}>
                    {profession}
                </Typography>
                <Typography variant='subtitle2' sx={{ textAlign: 'center', m: '3% 0' }}>
                    {company}
                </Typography>

                <ReactStars
                    value={rating}
                    size={24}
                    activeColor="#ffd700"
                />

                <Typography variant='body2' sx={{ textAlign: 'center' }}>
                    "{message}"
                </Typography>
            </Paper>
        </Grid>
    );
};

export default ReviewBox;