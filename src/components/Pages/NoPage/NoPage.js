import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const NoPage = () => {
    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Box>
                    <Typography variant='h2'>
                        ERROR 404
                    </Typography>
                    <Typography variant='h4'>
                        No Page Found.
                    </Typography>
                </Box>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default NoPage;