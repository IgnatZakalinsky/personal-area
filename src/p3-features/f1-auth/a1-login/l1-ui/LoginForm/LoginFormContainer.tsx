import React, {useCallback, useEffect, useState} from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import LoginForm, {LoginFormDataType, LoginFormErrorDataType} from "./LoginForm";
import {useMemoBooleanSelector} from "../../../../../p2-main/m2-bll/booleans/useBooleanSelectors";
import {useDispatch} from "react-redux";
import {sendTokenTC} from "../../l2-bll/sendToken";
import {clearBooleans} from "../../../../../p2-main/m2-bll/booleans/booleanCallbacks";
import {Redirect, useParams} from "react-router-dom";
import {PATH} from "../../../../../p2-main/m1-ui/u2-routes/Routes";
import {message} from "antd";
import CustomSpin from "../../../../../p1-common/c1-ui/u5-spins/CustomSpin";

export const LOGIN_BOOLEAN_NAMES: [string, string, string] = ["LOGIN/LOADING", "LOGIN/ERROR", "LOGIN/SUCCESS"];

const LoginFormContainer = React.memo(() => {
    const {token: tokenInParams} = useParams();
    log("tokenInParams: ", tokenInParams);
    const [token, setToken] = useState<string>(tokenInParams);

    const [loading, error, success] = useMemoBooleanSelector(LOGIN_BOOLEAN_NAMES);
    const [firstRendering, setFirstRendering] = useState<boolean>(true);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [spin, setSpin] = useState<boolean>(!!tokenInParams); // !!! need add validate(tokenInParams)

    const dispatch = useDispatch();
    const sendToken = useCallback(() => {
        if (!loading.value && !success.value) dispatch(sendTokenTC(token))
    }, [dispatch, loading, token, success]);

    useEffect(() => {
        if (firstRendering) {
            clearBooleans(dispatch, LOGIN_BOOLEAN_NAMES);
            if (tokenInParams) sendToken(); // !!! need add validate(tokenInParams)

            setFirstRendering(false); // + rerender
        } else {
            if (success.value) {
                message.success("ok!", 1);
                setTimeout(() => setRedirect(true), 1500);
            }
            if (error.value) {
                if (spin) setSpin(false);
                else {
                    message.error(error.data.toString()); // !!! need function objectOrAnyToString(error.data)
                    clearBooleans(dispatch, LOGIN_BOOLEAN_NAMES);
                }
            }
        }
    }, [dispatch, firstRendering, setFirstRendering, success, error, tokenInParams, sendToken, spin]);

    // callbacks
    const onFinish = useCallback((values: LoginFormDataType) => {
        log('Success:', values);
        sendToken();
    }, [sendToken]);
    const onFinishFailed = useCallback((errorInfo: LoginFormErrorDataType) => {
        log('Failed:', errorInfo);
        message.error(errorInfo.errorFields[0].errors)
    }, []);

    // render
    log("4 ---- rendering LoginFormContainer");
    if (redirect) return <Redirect to={PATH.PROFILE}/>;
    if (spin) return <CustomSpin renderLog={"4 ----- rendering LoginFormContainer Spin"}/>;

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
