import React from "react";
import {log} from "../../../p1-common/c0-debug/debug";
import {NavLink} from "react-router-dom";
import {IS_DEVELOPER_VERSION} from "../../../p0-config/config";
import {pathHelper} from "./pathHelper";
import {Divider} from "antd";
import {RouteType} from "./Routes";

const HeaderForDevelopers: React.FC<{ routes: RouteType[] }> = React.memo(({routes}) => {
    const navlinksForDevelopers = routes.map(r => {
        const path = pathHelper(r.path);

        return (
            <NavLink
                key={r._id}
                to={path}
            >
                {path}
            </NavLink>
        )
    });

    log("3 --- rendering HeaderForDevelopers");
    if (IS_DEVELOPER_VERSION) return (
        <>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                {navlinksForDevelopers}
            </div>
            <Divider/>
        </>
    );
    else return null;
});

export default HeaderForDevelopers;
