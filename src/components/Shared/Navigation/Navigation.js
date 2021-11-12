import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function Navigation() {

    const { user, logOut } = useAuth();

    const history = useHistory()

    const handleClick = () => {

        history.push('/dashboard')
    }

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
                            <MenuIcon onClick={handleClick} />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Car Reign
                        </Typography>
                        <NavLink style={{ color: 'white', textDecoration: 'none', marginRight: '3%' }} activeStyle={{ borderBottom: '2px solid white' }} to='/dashboard'><Typography variant='body'>
                            Dashboard
                        </Typography></NavLink>
                        <NavLink style={{ color: 'white', textDecoration: 'none', marginRight: '3%' }} activeStyle={{ borderBottom: '2px solid white' }} to='/explore'><Typography variant='body'>
                            Explore
                        </Typography></NavLink>
                        <NavLink style={{ color: 'white', textDecoration: 'none', marginRight: '3%' }} activeStyle={{ borderBottom: '2px solid white' }} to='/home'><Typography variant='body'>
                            Home
                        </Typography></NavLink>
                        {
                            !user ?
                                <Button variant='outlined' sx={{ border: '1px solid #999' }}>
                                    <NavLink to='/login' style={{ color: 'white', textDecoration: 'none' }}>Login</NavLink>
                                </Button> :
                                <Box>
                                    <Typography variant='body'>
                                        {user.displayName}
                                    </Typography>
                                    <Button variant='outlined' onClick={logOut} sx={{
                                        border: '1px solid white', color: 'white', ml: '10px'
                                    }}>
                                        Log out
                                    </Button>
                                </Box>
                        }
                    </Toolbar>
                </AppBar>
            </ Box>
        </Box >
    );
}

export default Navigation;