import React, {useCallback, useEffect, useState} from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import LoginForm, {LoginFormDataType, LoginFormErrorDataType} from "./LoginForm";
import {useBooleanSelector} from "../../../../../p2-main/m2-bll/booleans/useBooleanSelectors";
import {useDispatch} from "react-redux";
import {sendTokenTC} from "../../l2-bll/sendToken";
import {clearBooleans} from "../../../../../p2-main/m2-bll/booleans/booleanCallbacks";
import { Redirect } from "react-router-dom";
import {PATH} from "../../../../../p2-main/m1-ui/u2-routes/Routes";

const LOGIN_BOOLEAN_NAMES = ["LOGIN/LOADING", "LOGIN/ERROR", "LOGIN/SUCCESS"];

const LoginFormContainer = React.memo(() => {
    // const [token, setToken] = useState<string>("");
    const [token, setToken] = useState<string>("b8d798e0-a1ae-11ea-b70e-e92253bbd4bd");
    const [loading, error, success] = useBooleanSelector(LOGIN_BOOLEAN_NAMES);
    const [firstRendering, setFirstRendering] = useState<boolean>(true);
    const [redirect, setRedirect] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (firstRendering) {
            clearBooleans(dispatch, LOGIN_BOOLEAN_NAMES);

            setFirstRendering(false);
        }

        if (success.value) setTimeout(() => setRedirect(true), 1500);
    }, [dispatch, firstRendering, setFirstRendering, success]);

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
    if (redirect && !firstRendering) return <Redirect to={PATH.PROFILE}/>;

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
