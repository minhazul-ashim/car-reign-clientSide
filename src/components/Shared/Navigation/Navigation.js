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
import { FaUserCircle } from 'react-icons/fa';
import { GoTriangleDown } from 'react-icons/go';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navigation() {

    const { user, logOut } = useAuth();

    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleExpand = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                    <Box
                                        id="basic-button"
                                        aria-controls="basic-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleExpand}
                                        sx={{ display: 'flex' }}>
                                        {
                                            !user.photoURL ?
                                                <FaUserCircle style={{ fontSize: '25px' }} /> :
                                                <img style={{ width: '30px', borderRadius: '50%' }} src={user?.photoURL} alt=''></img>
                                        }
                                        <GoTriangleDown />
                                    </Box>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}><Typography variant='body'>
                                            {user.displayName}
                                        </Typography></MenuItem>
                                        <MenuItem onClick={handleClose}><NavLink style={{ color: 'black', textDecoration: 'none', marginRight: '3%' }} activeStyle={{ borderBottom: '2px solid white' }} to='/dashboard'><Typography variant='body'>
                                            Dashboard
                                        </Typography></NavLink></MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <Button variant='outlined' onClick={logOut} sx={{
                                                border: '1px solid red', color: 'black'
                                            }}>
                                                Log out
                                            </Button></MenuItem>
                                    </Menu>
                                </Box>
                        }
                    </Toolbar>
                </AppBar>
            </ Box>
        </Box >
    );
}

export default Navigation;