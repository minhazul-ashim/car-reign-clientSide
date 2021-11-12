import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [admin, setAdmin] = useState({})

    const handleBlur = (e) => {

        setAdmin({ email: e.target.value })
    }

    const handleSubmit = (e) => {

        fetch(`http://localhost:5000/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        e.preventDefault()
    }

    return (
        <Container>
            <Typography variant='h4'>
                Enter the desired admin information
            </Typography>

            <form onSubmit={handleSubmit}>

                <TextField onBlur={handleBlur} sx={{ width: '75%', display: 'block', my: '2%' }} label="Admin Email Address" variant="standard" />

                <Button variant='contained' type='submit'>Submit</Button>
            </form>

        </Container>
    );
};

export default MakeAdmin;