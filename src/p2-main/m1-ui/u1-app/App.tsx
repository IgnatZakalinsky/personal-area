import React from "react";
import s from "./App.module.css";
import 'antd/dist/antd.css'; // antd
import {log} from "../../../p1-common/c0-debug/debug";
import Routes from "../u2-routes/Routes";
import {HashRouter} from "react-router-dom";

const App = React.memo(() => {

    log("1 - rendering App");
    return (
        <div className={s.App}>
            <HashRouter>
                <Routes/>
            </HashRouter>
        </div>
    );
});

export default App;
