import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const ReviewBox = ({ review }) => {

    const { client, message, company } = review;

    return (
        <Grid item xs={12} md={4} sx={{ height: '100%' }}>
            <Paper elevation={1} sx={{ p: '5%', height: '100%' }}>
                <Typography variant='h6' sx={{ textAlign: 'center' }}>
                    {client}
                </Typography>
                <Typography variant='subtitle2' sx={{ textAlign: 'center', m: '3% 0' }}>
                    {company}
                </Typography>
                <Typography variant='body2' sx={{ textAlign: 'center' }}>
                    "{message}"
                </Typography>
            </Paper>
        </Grid>
    );
};

export default ReviewBox;