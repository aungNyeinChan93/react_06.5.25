import React from 'react';
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About Page" }
    ];
};

const AboutPage = () => {
    return (
        <React.Fragment>
            <h1>About Page</h1>
        </React.Fragment>
    );
};

export default AboutPage;