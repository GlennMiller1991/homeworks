import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import UnterJunior from "./pages/UnterJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import UberJunior from "./pages/UberJunior";

export const PATH = {
    UNTER_JUNIOR: '/unter-junior',
    JUNIOR: '/junior',
    UBER_JUNIOR: '/uber-junior',
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.JUNIOR}/>}/>
                <Route path={PATH.UNTER_JUNIOR} render={() => <UnterJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.UBER_JUNIOR} render={() => <UberJunior/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
