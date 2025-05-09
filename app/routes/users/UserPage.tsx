import React from 'react';
import type { Route } from '../../+types/root';
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Users Page" }
    ];
};

const UserPage = () => {
    return (
        <React.Fragment>
            <h1>User Page</h1>
        </React.Fragment>
    );
};

export default UserPage;