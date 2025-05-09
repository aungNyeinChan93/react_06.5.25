import React from 'react';
import type { Route } from '../+types/root';
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Register Page" }
    ];
};

const RegisterPage = () => {
    return (
        <React.Fragment>
            <h1>Register Page</h1>
        </React.Fragment>
    );
};

export default RegisterPage;