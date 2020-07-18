import React, {ReactNode} from "react";
import {log} from "../../../p1-common/c0-debug/debug";
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import {v1} from "uuid";
import LoginPage from "../../../p3-features/f1-auth/a1-login/l1-ui/LoginPage";
import {IS_DEVELOPER_VERSION} from "../../../p0-config/config";

type RouteType = {
    _id: string
    path?: string | string[]
    exact?: boolean
    component: ReactNode
}

export const PATH = {
    DEFAULT: "/",
    LOGIN: "/login",
    LOGIN_WITH_TOKEN: "/login/:token",
    PROFILE: "/profile",
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
        path: [PATH.LOGIN, PATH.LOGIN_WITH_TOKEN],
        exact: true,
        component: <LoginPage/>,
    },
    {
        _id: v1(),
        path: PATH.PROFILE,
        exact: true,
        component: <div>Profile</div>,
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
    const navlinksForDevelopers = routes.map(r => { // header for developers
        let path: string;
        if (r.path)
            if (r.path.length) path = r.path[0]; // if path: string[] and path.length > 0
            else path = typeof r.path === "string"
                ? r.path // if path: string
                : "/not-correct-path"; // if path: []
        else path = "/error404"; // if path undefined

        return (
            <NavLink
                key={r._id}
                to={path}
            >
                {path}
            </NavLink>
        )
    });

    log("2 -- rendering Routes");
    return (
        <>
            {IS_DEVELOPER_VERSION && (
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                    {navlinksForDevelopers}
                </div>
            )}

            <Switch>
                {routesForRendering}
            </Switch>
        </>
    );
});

export default Routes;
