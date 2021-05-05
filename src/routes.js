// External Imports
import React from "react";
// My Imports
import {
    Dynasty,
    Home,
    Error404,
    CovidVaccineTracker,
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
        exact: true,
        path: '/covid-vaccine-tracker/',
        component: CovidVaccineTracker
    },
    {
        path: '*',
        component: Error404,
    }
];
