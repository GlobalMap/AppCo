import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from "./MainPage/MainPage";
import UserStats from "./UserStats/UserStats";
import Profile from "./Profile/Profile";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/stats" component={UserStats} />
            <Route path={"/user/:id"} component={Profile} />
        </Switch>
    )
}

export default Routes;