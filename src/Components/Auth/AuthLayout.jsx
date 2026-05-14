import React from 'react';
// import Register from './Register';
import { Outlet } from 'react-router';
//import Login from './Login';

const AuthLayout = () => {
    return (
        <div>
            {/* <Register /> */}
            <Outlet />
            {/* <Login/> */}
        </div>
    );
};

export default AuthLayout;