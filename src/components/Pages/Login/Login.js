import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <>
            <Navigation></Navigation>
            <LoginForm></LoginForm>
            <Footer></Footer>
        </>
    );
};

export default Login;