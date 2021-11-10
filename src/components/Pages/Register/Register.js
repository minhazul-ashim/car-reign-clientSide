import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import RegisterForm from './RegisterForm';

const Register = () => {
    return (
        <>
            <Navigation></Navigation>
            <RegisterForm></RegisterForm>
            <Footer></Footer>
        </>
    );
};

export default Register;