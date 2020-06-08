import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from "./MainPage/MainPage";
import UserStats from "./UserStats/UserStats";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/stats" component={UserStats} />
        </Switch>
    )
}

export default Routes;