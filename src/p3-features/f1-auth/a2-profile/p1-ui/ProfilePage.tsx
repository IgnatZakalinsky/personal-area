import React from "react";
import {log} from "../../../../p1-common/c0-debug/debug";
import s from "./ProfilePage.module.css";

const ProfilePage = React.memo(() => {

    log("4 ---- rendering ProfilePage");
    return (
        <div className={s.ProfilePage}>
            profile

            {/*NewsContainer*/}

            {/*ChatContainer*/}

            {/*HelperBotContainer*/}
        </div>
    );
});

export default ProfilePage;
