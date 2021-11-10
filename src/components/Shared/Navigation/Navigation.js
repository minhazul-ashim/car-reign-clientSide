import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Box>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar sx={{
                    background: '#444',
                    color: 'white'
                }} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Car Reign
                        </Typography>
                        <Button sx={{ border: '1px solid #888' }}>
                            <NavLink to='/login' style={{ color: 'white', textDecoration: 'none' }}>Login</NavLink>
                        </Button>
                    </Toolbar>
                </AppBar>
            </ Box>
        </Box>
    );
}

export default Navigation;