import { Button, Container, TextField, Typography, TextareaAutosize } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const Review = () => {

    const { user } = useAuth();

    const [review, setReview] = useState({});

    const handleBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const reviewInfo = { ...review }
        reviewInfo[field] = value;
        reviewInfo['email'] = user.email;
        setReview(reviewInfo)
    }

    const handleSubmit = () => {

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>

            <Box sx={{ width: '75%' }}>

                <Typography variant='h4'>Leave a review</Typography>

                <TextField onBlur={handleBlur} name='client' fullWidth label="Your Name" variant="standard" />

                <TextField onBlur={handleBlur} name='email' disabled value={user?.email} fullWidth variant="standard" />

                <TextField onBlur={handleBlur} name='profession' fullWidth label="Your Profession or designation" variant="standard" />

                <TextField onBlur={handleBlur} name='company' fullWidth label="Your Company Name" variant="standard" />

                <TextareaAutosize
                    name='message'
                    onBlur={handleBlur}
                    aria-label="empty textarea"
                    placeholder="Your Message"
                    minRows={5}
                    style={{ width: "100%", marginTop: '3%' }}
                />

                <Button onClick={handleSubmit} variant='outlined' sx={{ mt: '3%', display: 'block' }}> Submit </Button>

            </Box>

        </Container>
    );
};

export default Review;