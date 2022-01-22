import './App.scss';
import routes from "./routes";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Routes>
        {
            routes.map(
                (route, index) => <Route key={index} {...route} />
            )
        }
    </Routes>
  )
}

export default App;
