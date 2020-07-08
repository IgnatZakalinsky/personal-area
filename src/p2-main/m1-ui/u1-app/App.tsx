import React from "react";
import s from "./App.module.css";
import 'antd/dist/antd.css';
import {log} from "../../../p1-common/c0-debug/debug";
import {Button} from "antd";

const App = () => {

    log("1 - rendering App");
    return (
        <div className={s.App}>
            <Button>test</Button>


            it-incubator
        </div>
    );
};

export default App;
