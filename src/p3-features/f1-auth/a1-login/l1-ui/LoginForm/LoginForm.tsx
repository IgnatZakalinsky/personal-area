import React from "react";
import {log} from "../../../../../p1-common/c0-debug/debug";
import s from "./LoginForm.module.css";

const LoginForm = React.memo(() => {

    log("5 ----- rendering LoginForm");
    return (
        <div className={s.LoginForm}>
            loginForm
        </div>
    );
});

export default LoginForm;
