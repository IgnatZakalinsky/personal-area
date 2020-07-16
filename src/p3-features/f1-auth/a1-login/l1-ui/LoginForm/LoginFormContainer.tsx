import React, {useCallback, useState} from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import LoginForm, {LoginFormDataType, LoginFormErrorDataType} from "./LoginForm";
import {useBooleanSelector} from "../../../../../p2-main/m2-bll/booleans/useBooleanSelectors";
import {useDispatch} from "react-redux";
import {sendTokenTC} from "../../l2-bll/sendToken";

const LOGIN_BOOLEAN_NAMES = ["LOGIN/LOADING", "LOGIN/ERROR", "LOGIN/SUCCESS"];

const LoginFormContainer = React.memo(() => {
    // const [token, setToken] = useState<string>("");
    const [token, setToken] = useState<string>("b8d798e0-a1ae-11ea-b70e-e92253bbd4bd");
    const [loading, error, success] = useBooleanSelector(LOGIN_BOOLEAN_NAMES);

    const dispatch = useDispatch();
    const sendToken = useCallback(() => {
        if (!loading.value) dispatch(sendTokenTC(token, LOGIN_BOOLEAN_NAMES))
    }, [dispatch, loading, token]);

    const onFinish = useCallback((values: LoginFormDataType) => {
        log('Success:', values);
        sendToken();
    }, [sendToken]);
    const onFinishFailed = useCallback((errorInfo: LoginFormErrorDataType) => {
        log('Failed:', errorInfo);
    }, []);

    log("4 ---- rendering LoginFormContainer");
    log(error, success)
    return (
        <LoginForm
            loading={loading.value}
            token={token}
            setToken={setToken}
            sendToken={sendToken}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        />
    );
});

export default LoginFormContainer;
