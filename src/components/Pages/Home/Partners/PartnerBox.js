import { Grid } from '@mui/material';
import React from 'react';

const PartnerBox = ({ partner }) => {

    const { name, logo } = partner;

    return (
        <Grid item xs={12} md={4}>
            <img src={logo} alt="" style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
        </Grid>
    );
};

export default PartnerBox;