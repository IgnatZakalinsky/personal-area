import React from "react";
import Log from "../../../../../p1-common/c0-debug/debug";
import s from "./LoginForm.module.css";
import Container from "../../../../../p1-common/c1-ui/u1-containers/Container";
import CustomButton from "../../../../../p1-common/c1-ui/u2-buttons/CustomButton";
import
    // CustomInput,
{ClassCustomInput} from "../../../../../p1-common/c1-ui/u3-inputs/CustomInput";
import {EnterOutlined} from "@ant-design/icons";
import {
    // Button, Input,
    Form,
} from "antd";

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
    return (
        <Container className={s.LoginForm}>
            <Log s={"5 ----- rendering LoginForm"}/>
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
                    name="token" // !!! warning !!! // Function components cannot be given refs. // if FunctionalInputComponent
                    rules={[
                        {required: true, message: "Please input your token!"},
                        // { // !!! warning !!! // findDOMNode is deprecated in StrictMode
                        //     validator: (formItemInfo, inputValue) => {
                        //         log(formItemInfo, inputValue);
                        //         if (inputValue === "test") return Promise.reject('test error');
                        //         else return Promise.resolve();
                        //     }
                        // },
                        // {len: 36, message: "Length must be 36"}, // !!! warning !!! // findDOMNode is deprecated in StrictMode
                    ]}
                >
                    <ClassCustomInput
                        // <CustomInput // !!! warning !!! // Function components cannot be given refs. // if FunctionalInputComponent
                        // <Input
                        prefix={"t: "}
                        placeholder={"* please input token"}
                        value={token}
                        autoFocus
                        maxLength={36}
                        onChangeText={setToken} // no in antd Input
                        onPressEnter={sendToken}
                        suffix={<EnterOutlined onClick={sendToken}/>}

                        renderLog={"7 +-- rendering log() token input"} // no in antd Input
                    />
                </Form.Item>

                <Form.Item>
                    <CustomButton // !!! warning !!! // findDOMNode is deprecated in StrictMode
                        // <Button //  !!! warning !!! // findDOMNode is deprecated in StrictMode
                        htmlType="submit"
                        className={s.loginButton}
                        loading={loading}

                        renderLog={"7 +-- rendering log() login button"} // no in antd Button
                    >
                        Login
                        {/*</Button>*/}
                    </CustomButton>
                </Form.Item>
            </Form>
        </Container>
    );
});

export default LoginForm;
