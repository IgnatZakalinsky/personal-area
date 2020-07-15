import React, {ReactNode} from "react";
import {log} from "../../../p1-common/c0-debug/debug";
import {Switch, Route, Redirect} from "react-router-dom";
import {v1} from "uuid";

type RouteType = {
    _id: string
    path?: string
    exact?: boolean
    component: ReactNode
}

export const PATH = {
    DEFAULT: '/',
    LOGIN: '/login',
};

export const routes: RouteType[] = [
    {
        _id: v1(),
        path: PATH.DEFAULT,
        exact: true,
        component: <Redirect to={PATH.LOGIN}/>,
    },
    {
        _id: v1(),
        path: PATH.LOGIN,
        exact: true,
        component: <div>login</div>,
    },

    { // 404
        _id: v1(),
        component: <div>404</div>,
    }
];

const Routes = React.memo(() => {
    const routesForRendering = routes.map(r => (
        <Route key={r._id} path={r.path} exact={r.exact} render={() => r.component}/>
    ));

    log("2 -- rendering Routes");
    return (
        <Switch>
            {routesForRendering}
        </Switch>
    );
});

export default Routes;
