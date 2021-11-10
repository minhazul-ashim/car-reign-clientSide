import { Opacity } from '@mui/icons-material';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box, display } from '@mui/system';
import React from 'react';
import bg from '../../../images/bannerbg.jpg'
import benz from '../../../images/benz.jpg'

const Banner = () => {

    return (
        <Box sx={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            objectFit: 'contain'
        }}>
            <Box sx={{
                background: 'rgba(00,00,00, 0.8)',
                width: '100%',
                padding: '5% 0'
            }}>
                <Container>
                    <Grid container sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Grid item xs={5} sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}>
                            <img src={benz} style={{
                                width: '100%',
                                borderRadius: '10px'
                            }} alt="" />
                        </Grid>
                        <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant='h4' sx={{
                                textAlign: 'center',
                                p: '5%',
                                color: 'white'
                            }}>
                                Take our exclusive cars to accompany you along the long road.
                            </Typography>
                            <Button variant='outlined' sx={{
                                border: 0,
                                background: '#54E3D6',
                                color: 'white'
                            }}>
                                Browse
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Banner;