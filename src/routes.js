// External Imports
import React from "react";
// My Imports
import {
    Dynasty,
    Home,
    Error404,
} from './screens';


export default [
    {
        exact: true,
        path: '/',
        component: Home,
    },
    {
        exact: true,
        path: '/dynasty/',
        component: Dynasty,
    },
    {
        path: '*',
        component: Error404,
    }
];
