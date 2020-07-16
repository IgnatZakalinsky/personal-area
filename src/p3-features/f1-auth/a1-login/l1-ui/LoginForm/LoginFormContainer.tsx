import React, {useCallback, useState} from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import LoginForm, {LoginFormDataType, LoginFormErrorDataType} from "./LoginForm";

const LoginFormContainer = React.memo(() => {
    // const [token, setToken] = useState<string>("");
    const [token, setToken] = useState<string>("b8d798e0-a1ae-11ea-b70e-e92253bbd4bd");
    // const loading = true;
    const loading = false;

    const sendToken = useCallback(() => loading || alert(token), [loading, token]);
    const onFinish = useCallback((values: LoginFormDataType) => {
        log('Success:', values);
        sendToken();
    }, [sendToken]);
    const onFinishFailed = useCallback((errorInfo: LoginFormErrorDataType) => {
        log('Failed:', errorInfo);
    }, []);

    log("4 ---- rendering LoginFormContainer");
    return (
        <LoginForm
            loading={loading}
            token={token}
            setToken={setToken}
            sendToken={sendToken}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        />
    );
});

export default LoginFormContainer;
