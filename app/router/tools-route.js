import React from 'react';
import NotificationsView from '../views/tools/notifications';

const route = [
    {
        path: 'tools/notifications',
        component: (props) => (<NotificationsView {...props} />)
    }
];

export default route;
