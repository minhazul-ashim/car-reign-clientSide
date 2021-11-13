import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([])

    const loadOrders = () => {

        fetch(`https://thawing-tor-41615.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }

    const handleCancel = (id) => {

        const proceed = window.confirm('Are you sure you want to cancel the order?')

        if (proceed) {
            fetch(`https://thawing-tor-41615.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => { loadOrders() })
        }
    }

    useEffect(loadOrders, [user])

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order Holder</TableCell>
                            <TableCell align="right">Ordered Model</TableCell>
                            <TableCell align="right">Order ID</TableCell>
                            <TableCell align="right">Order Status</TableCell>
                            <TableCell align="right">Cancel</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row._id}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell onClick={() => handleCancel(row._id)} align="right" sx={{ color: 'red', opacity: '0.7' }}>Cancel</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default MyOrders;