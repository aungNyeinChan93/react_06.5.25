import React from 'react';
import type { Route } from '../../+types/root';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Detail Users" }
    ];
};
export async function loader({ params }: Route.LoaderArgs) {
    const { id } = params;
    return { id }
}

const DetailUserPage = ({ loaderData }: Route.ComponentProps) => {
    const { id: userId } = loaderData!;
    return (
        <React.Fragment>
            <h1>Detail User Page {userId}</h1>
        </React.Fragment>
    );
};

export default DetailUserPage;