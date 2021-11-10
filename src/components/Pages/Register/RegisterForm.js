import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../images/loginimage.jpg'

const RegisterForm = () => {
    return (
        <Container>
            <Grid container sx={{ p: '5%' }}>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%' }}>

                        <TextField id="standard-basic" label="Your Name" variant="filled" sx={{ width: '100%', my: '2%' }} />

                        <TextField id="standard-basic" label="Email" variant="filled" sx={{ width: '100%' }} />

                        <TextField id="standard-basic" label="Password" type='password' variant="filled" sx={{ width: '100%', my: '2%' }} />

                        <Typography variant='body2'>
                            Already Registered? Please <Link to='/login'>Login.</Link>.
                        </Typography>

                        <Button variant='outlined' sx={{ mb: '3%', display: 'block' }}>
                            Submit
                        </Button>

                        <Button variant='contained' sx={{ color: 'white', background: 'maroon' }}>
                            Login with Google
                        </Button>
                        
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img src={loginImg} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegisterForm;