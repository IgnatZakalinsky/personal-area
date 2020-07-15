import React from "react";
import {log} from "../../../../p1-common/c0-debug/debug";
import s from "./LoginPage.module.css";

const LoginPage = React.memo(() => {

    log("3 --- rendering LoginPage");
    return (
        <div className={s.LoginPage}>
            LoginFormContainer
            
            {/*NewsContainer*/}

            {/*CharContainer*/}

            {/*HelperBotContainer*/}
        </div>
    );
});

export default LoginPage;
