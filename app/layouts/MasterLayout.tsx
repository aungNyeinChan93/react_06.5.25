import React from 'react';
import { Outlet } from 'react-router';

const MasterLayout = () => {
    return (
        <React.Fragment>
            <nav>Navbar</nav>
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    );
};

export default MasterLayout;