import React from "react";
import s from "./App.module.css";
import {log} from "../../../p1-common/c0-debug/debug";

const App = () => {

    log("1 - rendering App");
    return (
        <div className={s.App}>


            it-incubator
        </div>
    );
};

export default App;
