import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from "react";
import {log} from "../../c0-debug/debug";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-main/m2-bll/store";
import {message, Spin} from "antd";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../p2-main/m1-ui/u2-routes/Routes";

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type AuthRedirectPagePropsType = DivPropsType & {

    renderLog?: string
}

const AuthRedirectPage: React.FC<AuthRedirectPagePropsType> = React.memo((
    {

        renderLog,
        ...restProps
    }
) => {
    const {isAuth} = useSelector((store: AppStoreType) => store.profile);
    const [firstRendering, setFirstRendering] = useState<boolean>(true);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [spin, setSpin] = useState<boolean>(!isAuth); // !!! add request /auth/me

    useEffect(() => {
        if (firstRendering) {

            if (!isAuth) {
                message.error("Not logged in!");
                setTimeout(() => setRedirect(true), 1500);
            }
            setFirstRendering(false);
        } else {

        }
    }, [firstRendering, setFirstRendering, isAuth, setRedirect]);

    log(renderLog || "rendering AuthRedirectPage");
    if (redirect) return <Redirect to={PATH.LOGIN}/>;
    if (spin) return <Spin size="large"/>;

    return (
        <div {...restProps}/>
    );
});

export default AuthRedirectPage;
