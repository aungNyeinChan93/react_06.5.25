import React from 'react';
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact Page" }
    ];
};

const ContactPage = () => {
    return (
        <React.Fragment>
            <h1>Contact Page</h1>
        </React.Fragment>
    );
};

export default ContactPage;