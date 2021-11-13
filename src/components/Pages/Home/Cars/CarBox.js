import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const CarBox = (props) => {

    const { car } = props;

    const url = `/carinfo/${car._id}`

    return (
        <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{
                p: '3%', display: 'flex'
            }}>
                <Box sx={{ width: '50%', mr: 4 }}>
                    <img src={car.img} alt="" style={{
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

                    <Link to={url} style={{ textDecoration: 'none' }}>
                        <Button variant='outlined'>View Details</Button>
                    </Link>

                </Box>
            </Paper>
        </Grid>
    );
};

export default CarBox;