import React from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import s from "./LoginForm.module.css";
import Container from "../../../../../p1-common/c1-ui/u1-containers/Container";
import CustomButton from "../../../../../p1-common/c1-ui/u2-buttons/CustomButton";
import CustomInput from "../../../../../p1-common/c1-ui/u2-inputs/CustomInput";
import {EnterOutlined} from "@ant-design/icons";
import {Checkbox, Form} from "antd";

type LoginFormPropsType = {
    token: string
    setToken: (token: string) => void;
    sendToken: () => void
}

const LoginForm: React.FC<LoginFormPropsType> = React.memo(({token, setToken, sendToken}) => {
    const layout = {
        labelCol: {span: 50},
        wrapperCol: {span: 10},
    };
    const tailLayout = {
        wrapperCol: {offset: 8, span: 16},
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    log("5 ----- rendering LoginForm");
    return (
        <Container className={s.LoginForm} renderLog={"6 +- rendering LoginForm column"}>
            login

            <Form
                //{...layout}
                //name="basic"
                //initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label=" "
                    name="token"
                    rules={[
                        {required: true, message: "Please input your token!"},
                        // {len: 36, message: "Length must be 36"},
                        { // Warning: `callback` is deprecated. Please return a promise instead.
                            validator: (formItemInfo, inputValue, setError) => {
                                log(formItemInfo, inputValue);
                                if (inputValue === "test") setError('test error');
                                else setError();
                            }
                        },
                    ]}
                >
                    <CustomInput
                        prefix={"token: "}
                        placeholder={"please, input token"}
                        value={token}
                        onChangeText={setToken}
                        onPressEnter={sendToken}
                        suffix={<EnterOutlined onClick={sendToken}/>}
                        // allowClear // delete-text-button

                        renderLog={"7 +-- rendering token input"}
                    />
                </Form.Item>

                {/*<Form.Item {...tailLayout} name="remember" valuePropName="checked">*/}
                {/*    <Checkbox>Remember me</Checkbox>*/}
                {/*</Form.Item>*/}

                <Form.Item {...tailLayout}>
                    <CustomButton type="primary" htmlType="submit">
                        Submit
                    </CustomButton>
                </Form.Item>
            </Form>
        </Container>
    );
});

export default LoginForm;
