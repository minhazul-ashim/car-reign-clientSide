import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ background: '#111', color: 'white', pt: '5%' }}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h5'>
                            Car Reign
                        </Typography>
                        <Box>
                            <Typography variant='h6'>
                                About us
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officiis quaerat dignissimos inventore maiores, distinctio numquam natus nobis facilis commodi placeat ex illo corporis vero provident? Unde quidem repudiandae quam?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Typography variant='h6'>
                            Social Links
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6'>
                            Navigate
                        </Typography>
                        <Typography variant='body1'>
                            <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                                <li>Home</li>
                                <li>Collections</li>
                                <li>Reviews</li>
                                <li>Contact</li>
                                <li>Login</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={4}>
                        <Typography variant='body2'>
                            &copy; Car Reign | 2021
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant='body2'>
                            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
                                <li>Privacy</li>
                                <li>Policy</li>
                                <li>Conditions</li>
                                <li>Terms</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Footer;