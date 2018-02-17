import "babel-polyfill";
import React from "react";
import {Link, Route, Router} from "react-router-dom";

import { history } from '../config';
import Home from './home';
require('../../sass/header.sass');

const App = () => (
    <div>
        {/*<header>*/}
            {/*<Link to="/" className="logo">*/}
                {/*<span> &spades;ce</span>*/}
            {/*</Link>*/}
        {/*</header>*/}
        <main>
            <Router history={history}>
                <React.Fragment>
                    <Route exact path="/" component={Home}/>
                </React.Fragment>
            </Router>
        </main>
    </div>
);

export default App;
