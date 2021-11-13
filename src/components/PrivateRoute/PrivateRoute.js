import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import LoadingPage from '../Pages/LoadingPage/LoadingPage';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingPage></LoadingPage>
    } else {

        return (
            <Route
                {...rest}
                render={({ location }) => user ? children : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                >
                </Redirect>}
            >
            </Route>
        );
    }
};

export default PrivateRoute;