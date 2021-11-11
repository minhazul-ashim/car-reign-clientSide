import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import loginImg from '../../../images/loginimage.jpg';

const RegisterForm = () => {

    const [form, setForm] = useState({});

    const { googleSignIn } = useFirebase();

    const handleBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const previousField = { ...form };
        previousField[field] = value;

        setForm(previousField);
    }

    const handleSubmit = () => {

        console.log(form)
    }

    const googleLogin = () => {

        googleSignIn();
    }

    return (
        <Container>
            <Grid container sx={{ p: '5%' }}>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%' }}>

                        <TextField name='name' onBlur={handleBlur} label="Your Name" variant="filled" sx={{ width: '100%', my: '2%' }} />

                        <TextField name='email' onBlur={handleBlur} label="Email" variant="filled" sx={{ width: '100%' }} />

                        <TextField name='password' onBlur={handleBlur} label="Password" type='password' variant="filled" sx={{ width: '100%', my: '2%' }} />

                        <Typography variant='body2'>
                            Already Registered? Please <Link to='/login'>Login.</Link>.
                        </Typography>

                        <Button onClick={handleSubmit} variant='outlined' sx={{ mb: '3%', display: 'block' }}>
                            Submit
                        </Button>

                        <Button onClick={googleLogin} variant='contained' sx={{ color: 'white', background: 'maroon' }}>
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