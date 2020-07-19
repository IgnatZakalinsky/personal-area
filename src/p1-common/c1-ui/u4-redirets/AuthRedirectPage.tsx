import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from "react";
import Log from "../../c0-debug/debug";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-main/m2-bll/store";
import {message} from "antd";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../p2-main/m1-ui/u2-routes/Routes";
import CustomSpin from "../u5-spins/CustomSpin";

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
            setFirstRendering(false); // + rerender
        } else {

        }
    }, [firstRendering, setFirstRendering, isAuth, setRedirect]);

    if (redirect) return <Redirect to={PATH.LOGIN}/>;
    if (spin) return <CustomSpin renderLog={(renderLog || "rendering AuthRedirectPage") + " CustomSpin"}/>;

    return (
        <>
            <Log s={renderLog || "rendering AuthRedirectPage"}/>
            <div {...restProps}/>
        </>
    );
});

export default AuthRedirectPage;
