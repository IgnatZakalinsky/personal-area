import React from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import s from "./LoginForm.module.css";
import Container from "../../../../../p1-common/c1-ui/u1-containers/Container";
import CustomButton from "../../../../../p1-common/c1-ui/u2-buttons/CustomButton";
import CustomInput from "../../../../../p1-common/c1-ui/u2-inputs/CustomInput";
import {EnterOutlined} from "@ant-design/icons";

type LoginFormPropsType = {
    token: string
    setToken: (token: string) => void;
    sendToken: () => void
}

const LoginForm: React.FC<LoginFormPropsType> = React.memo(({token, setToken, sendToken}) => {

    log("5 ----- rendering LoginForm");
    return (
        <Container className={s.LoginForm} renderLog={"6 +- rendering LoginForm column"}>
            login
            <CustomInput
                placeholder={"token"}
                value={token}
                onChangeText={setToken}
                onPressEnter={sendToken}

                renderLog={"7 +-- rendering token input"}
                prefix={"token: "}
                suffix={<EnterOutlined onClick={sendToken}/>}
                // allowClear
            />
        </Container>
    );
});

export default LoginForm;
