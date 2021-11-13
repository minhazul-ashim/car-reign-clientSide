import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const LoadingPage = () => {
    return (
        <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <CircularProgress />
            </Box>
        </div>
    );
};

export default LoadingPage;