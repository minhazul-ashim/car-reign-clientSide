import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PartnerBox from './PartnerBox';

const PartnerContainer = () => {

    const [partners, setPartners] = useState([]);

    useEffect(() => {

        fetch('/partners.json')
            .then(res => res.json())
            .then(data => setPartners(data))
    }, [])

    return (
        <Grid container spacing={2}>
            {
                partners.map( partner => <PartnerBox key={partner.name} partner={partner}></PartnerBox>)
            }
        </Grid>
    );
};

export default PartnerContainer;