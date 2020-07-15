import React, {useCallback, useState} from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import LoginForm from "./LoginForm";

const LoginFormContainer = React.memo(() => {
    const [token, setToken] = useState<string>('');

    const sendToken = useCallback(() => alert(token), [token]);

    log("4 ---- rendering LoginFormContainer");
    return (
        <LoginForm token={token} setToken={setToken} sendToken={sendToken}/>
    );
});

export default LoginFormContainer;
