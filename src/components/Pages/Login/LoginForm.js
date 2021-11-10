import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../images/loginimage.jpg'

const LoginForm = () => {
    return (
        <Container>
            <Grid container sx={{ p: '5%' }}>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>

                    <Box sx={{ width: '100%' }}>

                        <TextField id="standard-basic" label="Email" variant="filled" sx={{ width: '100%' }} />

                        <TextField id="standard-basic" label="Password" type='password' variant="filled" sx={{ width: '100%', my: '2%' }} />

                        <Typography variant='body2'>
                            New here? Please <Link to='/register'>Register.</Link>.
                        </Typography>

                        <Button variant='contained' sx={{ display: 'block', mb: '3%' }}>
                            Login
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

export default LoginForm;