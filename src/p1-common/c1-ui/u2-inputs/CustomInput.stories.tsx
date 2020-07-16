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
import {log} from "../../c0-debug/debug";


export default {
    title: "S2_CustomInput",
    component: CustomInput,
};

export const AllProps = () => {
    const [value, setValue] = useState<string>("start value");
    const setValueCallback = (newValue: string) => {
        setValue(newValue);
        action("change value: ")(newValue);
    };
    const sendValue = () => {
        action("send value: ")(value);
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
                    some text
                </div>
            )}
            prefix={(
                <>
                    {"value: "}
                </>
            )}
            placeholder={"* please input value"}
            // defaultValue={"test default value"} // not worked with value
            value={value}
            maxLength={12}
            onChangeText={setValueCallback}
            onChange={(e) => log(e)}
            onPressEnter={sendValue}
            onKeyPress={(e) => log(e)}
            allowClear // delete-text-button
            suffix={(
                <>
                    <EnterOutlined onClick={sendValue}/>
                </>
            )}
            addonAfter={(
                <>
                    <QuestionCircleOutlined
                        title={"nothing to help :("}
                        rotate={45} // deg
                    />
                    <LoginOutlined onClick={sendValue}/>
                    <CheckCircleOutlined
                        // twoToneColor="#ff00ff" // icon must be ..TwoTone like CheckCircleTwoTone
                        style={{color: "#00ff00", fontSize: "24px"}}
                        spin
                    />
                    <LoadingOutlined/>
                </>
            )}

            renderLog={"7 +-- rendering input"}
        />
    )
};
