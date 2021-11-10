import { Container, Typography } from '@mui/material';
import React from 'react';
import PartnerContainer from './PartnerContainer';

const PartnerSection = () => {
    return (
        <Container sx={{ my: '10%' }}>
            <Typography variant='h4' sx={{ textAlign: 'center', my: '5%' }}>
                Collaboration
            </Typography>
            <PartnerContainer></PartnerContainer>
        </Container>
    );
};

export default PartnerSection;