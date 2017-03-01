import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppLayout from '../views/components/layout'
import HomeRoute from './home-route';
import AdminRoutes from './admin-routes';
import MoviesRoutes from './movies-route';
import PersonsRoutes from './persons-route';
import SearchRoutes from './search-route';
import ErrorRoutes from './error-route';
import ToolsRoutes from './tools-route';

export default {
    path: `${__BASE_URL__}`,
    indexRoute: { onEnter: ({ params }, replace) => replace(`${__BASE_URL__}home`) },
    component: AppLayout,
    childRoutes: [...HomeRoute, ...AdminRoutes, ...MoviesRoutes, ...PersonsRoutes, ...SearchRoutes, ...ErrorRoutes, ...ToolsRoutes]
};
