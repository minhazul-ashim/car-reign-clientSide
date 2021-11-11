import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function Navigation() {

    const { user, logOut } = useAuth();

    console.log(user);

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
                        {
                            !user ?
                                <Button sx={{}}>
                                    <NavLink to='/login' style={{ color: 'white', textDecoration: 'none' }}>Login</NavLink>
                                </Button> :
                                <Button onClick={logOut} sx={{
                                    border: 'none', background: 'red', color: 'white'
                                }}>
                                    Log out
                                </Button>
                        }
                    </Toolbar>
                </AppBar>
            </ Box>
        </Box >
    );
}

export default Navigation;