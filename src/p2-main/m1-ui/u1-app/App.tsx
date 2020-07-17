import React from "react";
import s from "./App.module.css";
import "antd/dist/antd.css"; // antd
import {log} from "../../../p1-common/c0-debug/debug";
import Routes from "../u2-routes/Routes";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../m2-bll/store";

const App = React.memo(() => {

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
