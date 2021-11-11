import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/loginimage.jpg'

const LoginForm = () => {

    const [loginInfo, setLoginInfo] = useState({});

    const { manualSignIn } = useAuth();

    const handleBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const previousValue = { ...loginInfo }
        previousValue[field] = value;

        setLoginInfo(previousValue)
    }

    const handleLogin = () => {

        const { email, password } = loginInfo;
        manualSignIn(email, password)
    }

    return (
        <Container>
            <Grid container sx={{ p: '5%' }}>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>

                    <Box sx={{ width: '100%' }}>

                        <TextField name='email' onBlur={handleBlur} id="standard-basic" label="Email" variant="filled" sx={{ width: '100%' }} />

                        <TextField name='password' onBlur={handleBlur} id="standard-basic" label="Password" type='password' variant="filled" sx={{ width: '100%', my: '2%' }} />

                        <Typography variant='body2'>
                            New here? Please <Link to='/register'>Register.</Link>.
                        </Typography>

                        <Button onClick={handleLogin} variant='contained' sx={{ display: 'block', mb: '3%' }}>
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