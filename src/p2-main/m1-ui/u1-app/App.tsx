import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import "antd/dist/antd.css"; // antd
import {log} from "../../../p1-common/c0-debug/debug";
import Routes from "../u2-routes/Routes";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../m2-bll/store";
import {MainAPI} from "../../m3-dal/instance";
import {message} from "antd";

const App = React.memo(() => {
    const [firstRendering, setFirstRendering] = useState<boolean>(true);
    useEffect(() => {
        if (firstRendering) {
            MainAPI.ping() // for test, wake up back
                .then(data => {
                    log("ping request: ", data);
                    const ping = new Date().getTime() - data.backTime;
                    message.success(`ping front to back = ${data.ping}, back to front = ${ping}`, 5);
                })
                .catch(e => log("ping request error object: ", {...e}));

            setFirstRendering(false);
        } else {

        }
    }, [firstRendering, setFirstRendering]);

    log("1 - rendering App");
    return (
        <div className={s.App}>
            <Provider store={store}>
                <HashRouter>
                    <Routes/>
                </HashRouter>
            </Provider>
        </div>
    );
});

export default App;
