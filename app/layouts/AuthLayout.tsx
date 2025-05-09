import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <React.Fragment>
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    );
};

export default AuthLayout;