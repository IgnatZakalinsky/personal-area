import React from "react";
import {log} from "../../../../p1-common/c0-debug/debug";
import s from "./LoginPage.module.css";
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const LoginPage = React.memo(() => {

    log("3 --- rendering LoginPage");
    return (
        <div className={s.LoginPage}>
            <LoginFormContainer/>

            {/*NewsContainer*/}

            {/*ChatContainer*/}

            {/*HelperBotContainer*/}
        </div>
    );
});

export default LoginPage;
