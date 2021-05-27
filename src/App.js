import "babel-polyfill";
import React from "react";
import {Route, Switch} from 'react-router';
import routes from './routes';
import './App.scss';

const App = () => (
    <div>
        <Switch>
            {
                routes.map(
                    (route, index) => <Route key={index} {...route} />
                )
            }
        </Switch>
    </div>
);

export default App;
