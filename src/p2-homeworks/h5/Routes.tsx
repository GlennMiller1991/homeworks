import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
