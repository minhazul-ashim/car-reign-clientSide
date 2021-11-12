import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    const loadOrders = () => {

        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }

    const handleStatus = (id, status) => {

        fetch(`http://localhost:5000/orders`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: id, status: status })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                loadOrders()
            })
    }

    useEffect(loadOrders, [])

    return (
        <Box>
            <Typography variant='h4'>
                Manage Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order Holder</TableCell>
                            <TableCell align="right">Order ID</TableCell>
                            <TableCell align="right">Order Status</TableCell>
                            <TableCell align="right">Payment Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.name}
                                </TableCell>
                                <TableCell align="right">{order._id}</TableCell>
                                <TableCell align="right">{order.status}</TableCell>
                                <TableCell align="right">Unpaid</TableCell>
                                <TableCell align="right">

                                    <Typography onClick={() => handleStatus(order._id, 'Approved')} variant='caption' sx={{ display: 'block', color: 'green' }}>
                                        Approve
                                    </Typography>

                                    <Typography onClick={() => handleStatus(order._id, 'Shipped')} variant='caption' sx={{ display: 'block', my: '10%', color: 'red' }}>
                                        Shipped
                                    </Typography>

                                    <Typography onClick={() => handleStatus(order._id, 'Delivered')} variant='caption' sx={{ display: 'block', color: 'blue' }}>
                                        Delivered
                                    </Typography>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ManageOrders;