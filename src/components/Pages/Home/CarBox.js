import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React from 'react';

const CarBox = (props) => {

    const { car } = props;


    return (
        <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{
                p: '3%', display: 'flex'
            }}>
                <Box sx={{ width: '50%', mr: 4 }}>
                    <img src="https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" style={{
                        width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px'
                    }} />
                </Box>
                <Box>
                    <Typography variant='h4'>
                        {car.name}
                    </Typography>
                    <Typography variant='subtitle1'>
                        Manufracturer: {car.manufrac}
                    </Typography>
                    <Typography variant='h6'>
                        Price: ${car.price}
                    </Typography>
                    <Button variant='outlined'>View Details</Button>
                </Box>
            </Paper>
        </Grid>
    );
};

export default CarBox;