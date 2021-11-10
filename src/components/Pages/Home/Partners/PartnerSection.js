import { Container, Typography } from '@mui/material';
import React from 'react';
import PartnerContainer from './PartnerContainer';

const PartnerSection = () => {
    return (
        <Container>
            <Typography variant='h4' sx={{ textAlign: 'center' }}>
                Collaboration
            </Typography>
            <PartnerContainer></PartnerContainer>
        </Container>
    );
};

export default PartnerSection;