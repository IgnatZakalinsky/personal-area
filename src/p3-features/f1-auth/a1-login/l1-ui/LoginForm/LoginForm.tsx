import React from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import s from "./LoginForm.module.css";
import Container from "../../../../../p1-common/c1-ui/u1-containers/Container";
import CustomButton from "../../../../../p1-common/c1-ui/u2-buttons/CustomButton";
import CustomInput from "../../../../../p1-common/c1-ui/u2-inputs/CustomInput";
import {EnterOutlined} from "@ant-design/icons";
import {Form} from "antd";

type LoginFormPropsType = {
    token: string
    setToken: (token: string) => void;
    sendToken: () => void
}

const LoginForm: React.FC<LoginFormPropsType> = React.memo(({token, setToken, sendToken}) => {
    const onFinish = (values: any) => {
        log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        log('Failed:', errorInfo);
    };

    log("5 ----- rendering LoginForm");
    return (
        <Container className={s.LoginForm} renderLog={"6 +- rendering LoginForm column"}>
            login

            <Form
                name="token form"
                initialValues={{token: "b8d798e0-a1ae-11ea-b70e-e92253bbd4bd"}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                    <CustomButton type="primary" htmlType="submit">
                        Submit
                    </CustomButton>
                </Form.Item>
            </Form>
        </Container>
    );
});

export default LoginForm;
