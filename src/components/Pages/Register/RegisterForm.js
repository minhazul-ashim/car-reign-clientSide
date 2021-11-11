import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/loginimage.jpg';

const RegisterForm = () => {

    const [form, setForm] = useState({});

    const { googleSignIn, createUser, error } = useAuth();

    const handleBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const previousField = { ...form };
        previousField[field] = value;

        setForm(previousField);
    }

    const handleSubmit = () => {

        const { email, password } = form;
        createUser(email, password)
    }

    const googleLogin = () => {

        googleSignIn();
    }

    return (
        <Container>
            <Grid container sx={{}}>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '100%' }}>

                        <Typography sx={{ textAlign: 'center', mb: '3%', color: 'deepskyblue' }} variant='h3'>
                            User Registration
                        </Typography>

                        <TextField name='name' onBlur={handleBlur} label="Your Name" variant="filled" sx={{ width: '100%', my: '2%' }} />

                        <TextField name='email' onBlur={handleBlur} label="Email" variant="filled" sx={{ width: '100%' }} />

                        <TextField name='password' onBlur={handleBlur} label="Password" type='password' variant="filled" sx={{ width: '100%', my: '2%' }} />

                        <Typography variant='body2'>
                            Already Registered? Please <Link to='/login'>Login.</Link>.
                        </Typography>

                        <Button onClick={handleSubmit} variant='outlined' sx={{ display: 'block' }}>
                            Submit
                        </Button>
                        <Typography sx={{ color: 'red' }} variant='caption'>
                            {error}
                        </Typography>
                        <Button onClick={googleLogin} variant='contained' sx={{ color: 'white', background: 'maroon', display: 'block', mt: '2%' }}>
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