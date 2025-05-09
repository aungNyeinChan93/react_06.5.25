import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [

    layout('./layouts/MasterLayout.tsx', [
        route('/', "routes/home.tsx"),
        route('/about', 'routes/about.tsx'),
        route('/contact', 'routes/ContactPage.tsx'),
        ...prefix('/users', [
            index('./routes/users/UserPage.tsx'),
            route(':id', 'routes/users/DetailUserPage.tsx')
        ]),
    ]),
    layout('./layouts/AuthLayout.tsx', [
        route('/auth/login', './routes/LoginPage.tsx'),
        route('/auth/register', './routes/RegisterPage.tsx'),
    ]),
    route('*', './routes/NotFoundPage.tsx')

] satisfies RouteConfig;
