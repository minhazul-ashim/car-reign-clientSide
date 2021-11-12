import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import useAuth from '../../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageReviews from '../ManageReviews/ManageReviews';
import AddProduct from '../AddProduct/AddProduct';
import { ListItemIcon } from '@mui/material';
import { FaHome, FaNewspaper, FaPlusSquare, FaPenNib, FaUser, FaSignOutAlt, FaMoneyBill, FaThumbsUp } from 'react-icons/fa'

const drawerWidth = 240;

function DashboardHome(props) {

    const { user, admin, logOut } = useAuth();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon><FaHome /></ListItemIcon>
                    <ListItemText sx={{ textDecoration: 'none' }} as={Link} to='/home' primary='Home' />
                </ListItem>


                {
                    !admin ?
                        <>
                            <ListItem button>
                                <ListItemIcon><FaNewspaper /></ListItemIcon>
                                <ListItemText sx={{ textDecoration: 'none' }} as={Link} to={`${url}/myorders`} primary='My Orders' />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><FaMoneyBill /></ListItemIcon>
                                <ListItemText sx={{ textDecoration: 'none' }} as={Link} to={`${url}/payment`} primary='Make Payment' />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><FaThumbsUp /></ListItemIcon>
                                <ListItemText sx={{ textDecoration: 'none' }} as={Link} to={`${url}/review`} primary='Review' />
                            </ListItem>
                        </> :
                        <>

                            <ListItem button>
                                <ListItemIcon><FaNewspaper /></ListItemIcon>
                                <ListItemText sx={{ textDecoration: 'none' }} as={Link} to={`${url}/manageorders`} primary='Manage Orders' />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><FaPlusSquare /></ListItemIcon>
                                <ListItemText sx={{ textDecoration: 'none' }} as={Link} to={`${url}/addproduct`} primary='Add a Product' />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><FaPenNib /></ListItemIcon>
                                <ListItemText sx={{ textDecoration: 'none' }} as={Link} to={`${url}/managereviews`} primary='Manage Reviews' />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><FaUser /></ListItemIcon>
                                <ListItemText sx={{ textDecoration: 'none' }} as={Link} to={`${url}/makeadmin`} primary='Make Admin' />
                            </ListItem>
                        </>
                }

                <ListItem button>
                    <ListItemIcon><FaSignOutAlt /></ListItemIcon>
                    <ListItemText onClick={logOut} to='/home' primary='Log out' />
                </ListItem>


            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {user?.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        {!admin ?
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route> :
                            <Route exact path={path}>
                                <ManageOrders></ManageOrders>
                            </Route>}
                    </Route>
                    <Route path={`${path}/manageorders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/managereviews`}>
                        <ManageReviews></ManageReviews>
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

DashboardHome.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardHome;
