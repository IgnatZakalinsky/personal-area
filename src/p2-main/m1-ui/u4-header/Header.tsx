import React from "react";
import {log} from "../../../p1-common/c0-debug/debug";
import {PageHeader, Divider} from "antd";

const Header = React.memo(() => {

    log("2 -- rendering Header");
    return (
        <>
            <PageHeader
                title={<a href={"https://it-incubator.by/"} rel="noopener noreferrer" target="_blank">it-incubator</a>}
            />
            <Divider/>
        </>
    );
});

export default Header;
