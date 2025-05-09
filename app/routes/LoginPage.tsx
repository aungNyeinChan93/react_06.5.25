import React from 'react';
import type { Route } from '../+types/root';
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Login Page" }
    ];
};

const LoginPage = () => {
    return (
        <React.Fragment>
            <h1>Login Page</h1>
        </React.Fragment>
    );
};

export default LoginPage;