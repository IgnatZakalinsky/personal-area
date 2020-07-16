import React, {useState} from "react";
import 'antd/dist/antd.css'; // antd, must be first
import {action} from "@storybook/addon-actions";
import CustomInput from "./CustomInput";
import {
    EnterOutlined,
    LockOutlined,
    UnlockOutlined,
    QuestionCircleOutlined,
    LoginOutlined,
    CheckCircleOutlined,
    // CheckCircleTwoTone,
    LoadingOutlined,
    // https://ant.design/components/icon/
} from "@ant-design/icons";


export default {
    title: "CustomInput",
    component: CustomInput,
};

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const All = () => {
    const [token, setToken] = useState<string>("test2");
    const setTokenCallback = (newToken: string) => {
        setToken(newToken);
        action("change token: ")(newToken);
    };
    const sendToken = () => {
        action("send token: ")(token);
    };

    const [disabled, setDisabled] = useState<boolean>(false);
    const changeDisabled = () => setDisabled(!disabled);

    return (
        <CustomInput
            disabled={disabled}

            addonBefore={(
                <div onClick={changeDisabled}>
                    {disabled
                        ? (
                            <UnlockOutlined/>
                        )
                        : (
                            <LockOutlined/>
                        )}
                </div>
            )}
            prefix={(
                <>
                    {"token: "}
                </>
            )}
            placeholder={"* please input token"}
            defaultValue={""}
            value={token}
            maxLength={36}
            onChangeText={setTokenCallback}
            onPressEnter={sendToken}
            allowClear // delete-text-button
            suffix={(
                <>
                    <EnterOutlined onClick={sendToken}/>
                </>
            )}
            addonAfter={(
                <>
                    <QuestionCircleOutlined
                        title={"nothing to help :("}
                        rotate={45} // deg
                    />
                    <LoginOutlined onClick={sendToken}/>
                    <CheckCircleOutlined
                        // twoToneColor="#ff00ff" // icon must be ..TwoTone like CheckCircleTwoTone
                        style={{color: "#00ff00", fontSize: "24px"}}
                        spin
                    />
                    <LoadingOutlined/>
                </>
            )}

            renderLog={"7 +-- rendering token input"}
        />
    )
};
