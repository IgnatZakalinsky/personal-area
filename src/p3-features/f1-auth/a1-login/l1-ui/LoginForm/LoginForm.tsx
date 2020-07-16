import React from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import s from "./LoginForm.module.css";
import Container from "../../../../../p1-common/c1-ui/u1-containers/Container";
import CustomButton from "../../../../../p1-common/c1-ui/u2-buttons/CustomButton";
import CustomInput from "../../../../../p1-common/c1-ui/u2-inputs/CustomInput";
import {EnterOutlined} from "@ant-design/icons";
import {Form} from "antd";

export type LoginFormDataType = {
    token?: string
}

export type LoginFormErrorDataType = {
    values: LoginFormDataType
    errorFields: {
        name: (string | number)[]
        errors: string[]
    }[]
    outOfDate: boolean
}

type LoginFormPropsType = {
    loading: boolean
    token: string
    setToken: (token: string) => void;
    sendToken: () => void
    onFinish: (values: LoginFormDataType) => void
    onFinishFailed: (errorInfo: LoginFormErrorDataType) => void
}

const LoginForm: React.FC<LoginFormPropsType> = React.memo((
    {token, setToken, sendToken, loading, onFinish, onFinishFailed}
) => {
    log("5 ----- rendering LoginForm");
    return (
        <Container className={s.LoginForm} renderLog={"6 +- rendering LoginForm column"}>
            login

            <Form
                name="token form"
                initialValues={{token}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className={s.form}
            >
                <Form.Item
                    // label=" "
                    name="token"
                    rules={[
                        {required: true, message: "Please input your token!"},
                        // { // Warning: `callback` is deprecated. Please return a promise instead.
                        //     validator: (formItemInfo, inputValue, setError) => {
                        //         log(formItemInfo, inputValue);
                        //         if (inputValue === "test") setError('test error');
                        //         else setError();
                        //     }
                        // },
                        {len: 36, message: "Length must be 36"},
                    ]}
                >
                    <CustomInput
                        prefix={"t: "}
                        placeholder={"* please input token"}
                        value={token}
                        maxLength={36}
                        onChangeText={setToken}
                        onPressEnter={sendToken}
                        suffix={<EnterOutlined onClick={sendToken}/>}

                        renderLog={"7 +-- rendering token input"}
                    />
                </Form.Item>

                <Form.Item>
                    <CustomButton
                        htmlType="submit"
                        className={s.loginButton}
                        loading={loading}

                        renderLog={"7 +-- rendering login button"}
                    >
                        Login
                    </CustomButton>
                </Form.Item>
            </Form>
        </Container>
    );
});

export default LoginForm;
