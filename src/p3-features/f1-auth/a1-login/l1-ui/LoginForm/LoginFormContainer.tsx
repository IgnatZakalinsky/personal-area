import React from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import LoginForm from "./LoginForm";

const LoginFormContainer = React.memo(() => {

    log("4 ---- rendering LoginFormContainer");
    return (
        <LoginForm/>
    );
});

export default LoginFormContainer;
